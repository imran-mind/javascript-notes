import sum from './sum';

it("When a & b is number",()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
});

it("When a & b is string",()=>{
    const result = sum("3","4");
    expect(result).toBe(7)
})