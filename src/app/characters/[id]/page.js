export default async function MaleChar({params}){
    const {id} = await params;
    return <h1> Male Character: {id} </h1>;
};