import React from 'react';
import axios from 'axios';
import Loader from './loader.gif';
import './Search.css'
import PageNavigation from './PageNavigation';

const Search = () =>{
    const [state,setState] = React.useState({
                                                query:'',
                                                result:{},
                                                loading:false,
                                                message:'',
                                                totalResults: 0,
                                                totalPages: 0,
                                                currentPageNo: 0,
                                            });

        /**
     * Get the Total Pages count.
     *
     * @param total
     * @param denominator Count of results per page
     * @return {number}
     */
    const getPagesCount = (total, denominator) => {
        const divisible = total % denominator === 0;
        const valueToBeAdded = divisible ? 0 : 1;
        return Math.floor(total / denominator) + valueToBeAdded;
    };

        /**
     * Fetch results according to the prev or next page requests.
     *
     * @param {String} type 'prev' or 'next'
     */
    const handlePageClick = (type,event) => {
        event.preventDefault();
        const updatedPageNo =
                'prev' === type
                    ? state.currentPageNo - 1
                    : state.currentPageNo + 1;

        if (!state.loading) {
            // setState({...state, loading: true, message: '' }, () => {
            //     // Fetch previous 20 Results
            //     fetchSearchResults(updatedPageNo, state.query);
            // });
            setState({...state,loading: true, message:''});
            fetchSearchResults(updatedPageNo,state.query)
        }
    };
    const fetchSearchResults = async (updatedPageNo, query) =>{
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}`: '';
        const key = `22329872-f88aaac4cc7607f8fc8293e02`
        const searchUrl = `https://pixabay.com/api/?key=${key}&q=${query}${pageNumber}`;
        try{
            const res = await axios.get(searchUrl);
            const total = res.data.total;
            const totalPagesCount = getPagesCount( total, 20 );

            const resultNotFound = !res.data.hits.length ? 'There are no more search results. please try a new search': '';
            console.log('result ',res.data.hits)
            setState({
                ...state,
                loading:false,
                result: res.data.hits,
                message:resultNotFound,
                totalResults: res.data.total,
                currentPageNo: updatedPageNo,
                totalPages: totalPagesCount,
            })
        }catch(err){
            setState({
                ...state, loading: false, message:'Failed to fetch result,Please try again'
            })
        }           
    }

    const renderSearchResults = () =>{
        const {result} = state;
        console.log(result.length)
        if(result && result.length){
            return(
                <div className="results-container"> 
                    {
                        result.map((item)=>{
                            return (
                                <a key={item.id} href={item.previewURL} className="result-items">
                                    <h6 className="image-username">{item.user}</h6>
                                    <div className="image-wrapper">
								        <img loading="lazy" className="image" src={item.previewURL} alt={item.user}/>
							        </div>
                                </a>
                            )
                        })
                    }
                </div>
            )
        }
    }
    const handleOnInputChange = (e) =>{
        const key = e.key;
        if(key === 'Enter'){
            console.log(e.key)
            setState({...state,totalResults: 0, totalPages: 0, currentPageNo: 0,query:state.query,loading: true, message:''});
            fetchSearchResults(1,state.query)
        }
    }
    const { query, loading, message, currentPageNo, totalPages,result } = state;


    // showPrevLink will be false, when on the 1st page, hence Prev link be shown on 1st page.
    const showPrevLink = 1 < currentPageNo;

    // showNextLink will be false, when on the last page, hence Next link wont be shown last page.
    const showNextLink = totalPages > currentPageNo;

    return (
        <div className="container">
            <h2 className="heading">Live Search: React Application</h2>
            <label className="search-label" htmlFor="search-input">
                <input
                    onChange={event => {setState({...state, query: event.target.value})}}
                    onKeyDown={(e)=>handleOnInputChange(e)}
                    type="text"
                    value={state.query} 
                    id="search-input"
                    placeholder="Search..."/>
                <i className="fa fa-search search-icon"/>
            </label>
           
            {/*Error Message*/}
            { state.message && <p className="message">{state.message}</p> }
            {/*Loader*/}
            <img  src={Loader} className={`search-loading ${state.loading ? 'show' : 'hide' }`}  alt="loader"/>
           {/*Navigation Top*/}
            <PageNavigation
                loading={state.loading}
                showPrevLink={showPrevLink}
                showNextLink={showNextLink}
                handlePrevClick={(e) => handlePageClick('prev',e)}
                handleNextClick={(e) => handlePageClick('next',e)}
            />

            {/*Result*/}
            { renderSearchResults() }

            {/*Navigation Bottom*/}
            <PageNavigation
                loading={state.loading}
                showPrevLink={showPrevLink}
                showNextLink={showNextLink}
                handlePrevClick={(e) => handlePageClick('prev',e)}
                handleNextClick={(e) => handlePageClick('next',e)}
            />
           
        </div>
    )
}

export default Search;