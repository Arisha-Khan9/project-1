import {resolve} from "path";


export default async function About () { 

    await new Promise (resolve => {setTimeout(resolve,7000)
    })
    return(
        <div>
            <h1 className="text-4xl font-bold text-center p-4 bg-slate-400 rounded-lg">
                About Page...!
            </h1>
            <br />
            <p className="text-pink-500 text-2xl p-3 m-2">
                This is 2nd page of application, "About Page".If you want to move on other
                pages,click below.
            </p>

        </div>
    )
    
}