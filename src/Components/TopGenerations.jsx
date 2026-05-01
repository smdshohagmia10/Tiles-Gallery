

const TopGenerations =async () => {

    const res=await fetch("https://tiles-gallery-eta.vercel.app/data.json")
    const photos= await res.json();
    console.log(photos)
    return (
        <div>
            
        </div>
    );
};

export default TopGenerations;