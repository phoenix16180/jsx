function App() {
    // Logic:

    // Variables:
    const profileName = `Shelby500`;
    const luckyNumber = 7;
    const hobbies = ["Reading", "Traveling", "Exercising"];
    const person = {
        full_name: "Shelby Maverick",
        age: 30,
        profession: "Software Engineer"
    };

    // Conditional Rendering:
    const isLoggedIn = true;
    let element;
    if (isLoggedIn) {
        element = <h5>Welcome Traveler</h5>
    }
    else {
        element = <h5>Please Login</h5>
    }

    // Loops:
    const images = [
        { url: "./airplane.jpg", description: "An airplane sitting on an empty airfield." },
        { url: "./house.jpg", description: "A wooden house within a large forest." },
        { url: "./davici.jpg", description: "A large statue of Da Vinci" },
    ];

    // `imageElements` holds images with data from the `images` array.
    const imageElements = images.map((image, index) => {
        return (
            <img
                key={index}
                src={image.url}
                alt={image.description}
            />)
    });

    // Functions:
    const handleClick = (event, num) => {
        console.log("Button clicked, event: ", event);
        console.log("num: ", num);
        alert("Button clicked");
    }


    // UI Render:
    return (
        <>
            {/* Variables */}
            <h1>App</h1>
            <h3>Welcome {profileName}</h3>
            <h5>Full Name: {person.full_name}</h5>
            <h5>Lucky number: {luckyNumber}</h5>
            <h5>Profession: {person.profession}</h5>
            <h5>Age: {person.age}</h5>
            <h5>Hobbies:</h5>
            <ul>
                <li>{hobbies[0]}</li>
                <li>{hobbies[1]}</li>
                <li>{hobbies[2]}</li>
            </ul>

            {/* Conditional Rendering */}
            <h5>{element}</h5>

            {/* Loops */}
            <h5>Images:</h5>
            {imageElements}

            {/* Event Handling */}
            <button onClick={(event) => handleClick(event, 1)}>Click me</button>
        </>
    )
}

export default App
