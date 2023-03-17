import Utils from "./Utils";

const Profile = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold py-2">Notable Scientist</h1>
            <section className="flex items-center flex-col border-2 border-red-400 px-2 py-2 rounded">
                <h2 className="font-bold py-2">Maria Skolodowska</h2>
                <img className="rounded-full"
                    src={Utils('szV5sdG')}
                    alt="Maria Skolodowska img"
                    width={70}
                    height={70}
                />

                <ul className="text-left pl-4">
                    <li>
                        <b>Profession:</b> Physicist and chemist
                    </li>
                    <li>
                        <b>Awards: 4</b> (Nobel Prize in Physics, Nobel prize in Chemistry, Davvy medal, Matteccui Medal)
                    </li>
                    <li>
                        <b>discovered:</b> plonium element
                    </li>
                </ul>
            </section>

            <section className="flex items-center flex-col border-2 border-red-400 px-2 mt-2 py-2 rounded">
                <h2 className="font-bold py-2">Katsuko Saruhashi</h2>
                <img className="rounded-full"
                    src={Utils('YfeOqp2')}
                    alt="Katsuko Saruhash img"
                    width={70}
                    height={70}
                />
                <ul className="text-left pl-4">
                    <li>
                        <b>Profession: </b>
                        geochemist
                    </li>
                    <li>
                        <b>Awards: 2 </b>
                        (Miyake Prize for geochemistry, Tanaka Prize)
                    </li>
                    <li>
                        <b>Discovered: </b>
                        a method for measuring carbon dioxide in seawater
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Profile;