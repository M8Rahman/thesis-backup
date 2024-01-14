import React from 'react';

const Builder = () => {
    const [builder, setBuilder] = ('');


    const handleInputChange = (result) =>{
        console.log(builder);
        setBuilder(result.target.value);
    }

    const handleSetBuilder = () =>{

    }
    return (

        <div>
            <h1 className="text-4xl mb-5 ml-36">Builder Project Management</h1>
            <form className="border-4 border-sky-500  m-2 p-4 w-2/5 ml-44 shadow-lg rounded-lg">
                <label className="">
                Project ID:
                <input className="ml-[128px] mb-2 border border-black" type="text" name="id" onChange={handleInputChange} />
                </label>
                <br></br>
                <label >
                City Corporation Address:
                <input className="ml-[19px] mb-2 border border-black" type="text" onChange={handleInputChange} />
                </label>
                <br></br>
                <button className="text-black bg-sky-400 rounded-xl mt-4 h-10 w-[200px]" type="button" onClick={handleSetBuilder}>
                Set City Corporation
                </button>
            </form>
    </div>
    );
};

export default Builder;