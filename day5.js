async function test(req,res){
    try{
    console.log("fetching");
    const res = await fetch("./student.json");
    const data = await res.json();
    console.log(data);
    console.log("Data fetched")}
    catch(err){
        console.log("Internal Server Error")
    }
}

test();