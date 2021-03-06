let commentArr = new Array();
// Fetching commentArr(if exists) from localstorage
(()=> { 
	let commentsString = localStorage.getItem("myCommentArr");
	if(commentsString !== null) {
        commentArr = JSON.parse(commentsString);
        // console.log(JSON.parse(commentsString))
        // commentArr = commentArr;
		for(let i=0; i<commentArr.length; i++) {
			commentArr[i].lastUpdated = new Date(commentArr[i].lastUpdated); // converting to Date Object
		}
	}
})();

document.addEventListener('DOMContentLoaded',(params)=>{
    if(commentArr.length)
        renderComments();
    const addButton = document.getElementById('add-comment');
    addButton.addEventListener('click',()=>{
        let handle = document.getElementById('handle').value.trim();
        let content = document.getElementById('comment').value.trim();
        if(handle && content){
            addComment(handle,content,null);
        }
    });

    const commentsList = document.getElementById('comments-list');
    commentsList.addEventListener('click',(e)=>{
        console.log(e.target.id, e.target.nodeName);
        if(e.target.nodeName === 'A' || e.target.nodeName === 'BUTTON' || e.target.nodeName === 'SPAN'){
            let parts = e.target.id.split('-');
            let type = parts[0];
            let id = parts[parts.length-1];
            let abc = e.target.id.split('reply-')[1];
            // console.log('abc ',abc)
            // console.log(e.target.id);
            if(type === 'reply'){
                let inputElem = `
                    <li id="input-${abc}">
                        <div class="comment-input-row">
                            <div>
                                <input id="handle-${abc}" type="text" placeholder="handle" class="name-handle"/>
                            </div>
                        </div>
                        <div>
                            <textarea rows ="5" id="content-${abc}" class="comment-box" placeholder="your reply..."></textarea>
                            <div>
                                <button id="addreply-${abc}" class="add-btn">Reply</button>
                                <button id="canclereply-${abc}" class="add-btn">Cancle</button>
                            </div>
                        </div>
                    </li>
                `;
                const li = document.getElementById(`input-${abc}`);
                if(!li){
                    let childListElemId = `childlist-${e.target.id.split('reply-')[1]}`;
                    let childListElem = document.getElementById(childListElemId);
                    console.log('childListElem => ',childListElem)
                    if(childListElem ==  null){
                        childListElem = `<ul id="childlist-${e.target.id.split('reply-')[1]}"> ${inputElem} </ul>`;
                        document.getElementById(`comment-${abc}`).innerHTML += childListElem;
                    }else{
                        childListElem.innerHTML = inputElem + childListElem.innerHTML;
                    }
                }
            }else if(type === 'canclereply'){
                let childListElemId = `childlist-${e.target.id.split('reply-')[1]}`;
                let childListElem = document.getElementById(childListElemId);
                const li = document.getElementById(`input-${abc}`);
                childListElem.removeChild(li);

            }else if(type === 'addreply'){
                let handle = document.getElementById(`handle-${abc}`).value;
                let content = document.getElementById(`content-${abc}`).value;
                if(handle && content){
                    addComment(handle,content,id);
                }
                
            }else if(type === 'upvotes' || type === 'downvotes'){
                console.log(type);
                commentArr[id][type]++;
                renderComments();
                storeComments();
            }else if(type === 'delete'){
                console.log(type,abc,id);
                const comments = document.getElementById('comments-list');
                const comment = document.getElementById('comment-'+id);
                commentArr = commentArr.filter(item => item.id != id);
                comments.removeChild(comment);
                storeComments();
                renderComments();
            }
        }
    })
});

const addComment = (handle,comment,parent)=>{
    const newComment = getCommentObject(commentArr.length, handle, comment, 0, 0, parent);
    commentArr.push(newComment);
    console.log('->newComment ',newComment)
    if(parent != null){
        commentArr[parent].childrenIds.push(commentArr.length-1);
    }
    storeComments();
    renderComments();
}

const timeAgo = (date)=>{
	let currentDate = new Date();
	let yearDiff = currentDate.getFullYear() - date.getFullYear();

	if(yearDiff>0)
		return `${yearDiff} year${yearDiff==1? "":"s"} ago`;
	
	let monthDiff = currentDate.getMonth() - date.getMonth();
	if(monthDiff>0)
		return `${monthDiff} month${monthDiff == 1 ? "" : "s"} ago`;
	
	let dateDiff = currentDate.getDate() - date.getDate();
	if (dateDiff > 0)
		return `${dateDiff} day${dateDiff == 1 ? "" : "s"} ago`;
	
	let hourDiff = currentDate.getHours() - date.getHours();
	if (hourDiff > 0)
		return `${hourDiff} hour${hourDiff == 1 ? "" : "s"} ago`;

	let minuteDiff = currentDate.getMinutes() - date.getMinutes();
	if (minuteDiff > 0)
		return `${minuteDiff} minute${minuteDiff == 1 ? "" : "s"} ago`;
	return `a few seconds ago`;
}

// render on UI
const renderComments= () =>{
    const rootComments = [];
    commentArr.forEach(comment=>{
        if(comment.parentId == null || comment.parentId == 'null'){
            rootComments.push(comment);
        }
    });
    let commentList = '';
    rootComments.forEach(comment=>{
        commentList += renderComment(comment);
    });
    document.getElementById('comments-list').innerHTML = commentList;
}

const renderComment = (comment)=>{
    const id = comment.id;
    const deleteSpan = comment.parentId == null ? `<span style="cursor:pointer" class="material-icons-outlined" id="delete-${id}">
                    delete
                </span>` : '';
    
    let listElem = `
        <div class="hr"><hr/></div>
        <li id="comment-${id}" style="max-width=500px;">
            <div class="comment-header">
                <div class="comment-handle">
                    ${comment.handle}
                </div>
                <div style="color:rgba(0,0,0,0.3);margin-top:20px;">
                    posted ${timeAgo(comment.lastUpdated)}
                </div>
            </div>
            <div style="margin-top: 7px;">${comment.content}</div>
            <div class="comment-actions">
                ${comment.upvotes}
                    <span style="cursor:pointer" class="material-icons-outlined" id="upvotes-${id}">
                        thumb_up
                    </span>
                ${comment.downvotes}
                    <span style="cursor:pointer" class="material-icons-outlined" id="downvotes-${id}">
                        thumb_down
                    </span>
                <a href="#" role="button" id="reply-${id}">Reply</a>
                ${deleteSpan}
            </div>`;

    if(comment.childrenIds.length){
        listElem += `<ul id="childlist-${id}">`;
        comment.childrenIds.forEach(commentId =>{
            listElem+= renderComment(commentArr[commentId]);
        });
        listElem += '</ul>'
    }
    listElem += '</li>';
    return listElem;
}
// storing in localstorage;
const storeComments = ()=>{
    localStorage.setItem('myCommentArr', JSON.stringify(commentArr));
}
const getCommentObject = (id,handle,content,upvotes,downvotes,parentId)=>{
    return {
        "id": id,
        "handle": handle,
        "content": content,
        "upvotes": upvotes,
        "downvotes": downvotes,
        "parentId": parentId,
        "lastUpdated": new Date(),
        "childrenIds": []
    }
}
