import React, { useState } from 'react'

// Defining the ColorBg functional component
function ColorBg() {
    // Declaring a state variable 'color' with an initial value of "#FFE5B4" (light peach color)
    // 'setcolor' is the function to update the 'color' state
    const [color, setcolor] = useState("#FFE5B4");
    return (
        <>
            {/* The main div that takes the full width and height of the screen */}
            {/* The background color of this div is dynamically set to the 'color' state */}
            <div className="w-full h-screen duration-200"
                style={{ backgroundColor: color }}>
                {/* Fixed container for the buttons, positioned at the bottom of the screen */}
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    {/* Inner container for the buttons with styling for layout and appearance */}
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-4xl bg-white">
                        {/* Button to set the background color to red */}
                        <button
                            //An onClick handler that sets the color state to "red" when clicked.
                            onClick={() => setcolor("red")}
                            // Styling for the button, including a red background  
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "red" }}>
                            RED
                        </button>
                        <button
                            onClick={() => setcolor("green")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "green" }}>
                            GREEN
                        </button>
                        <button
                            onClick={() => setcolor("blue")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "blue" }}>
                            BLUE
                        </button>
                        <button
                            onClick={() => setcolor("olive")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "olive" }}>
                            OLIVE
                        </button>
                        <button
                            onClick={() => setcolor("gray")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "gray" }}>
                            GRAY
                        </button>
                        <button
                            onClick={() => setcolor("yellow")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "yellow" }}>
                            YELLOW
                        </button>
                        <button
                            onClick={() => setcolor("pink")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "pink" }}>
                            PINK
                        </button>
                        <button
                            onClick={() => setcolor("black")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "black" }}>
                            BLACK
                        </button>
                        <button
                            onClick={() => setcolor("lavender")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "lavender" }}>
                            LAVENDER
                        </button>
                        <button
                            onClick={() => setcolor("purple")}
                            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:bg-gray-200 duration-200"
                            style={{ backgroundColor: "purple" }}>
                            PURPLE
                        </button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ColorBg