const Tiles = () => {

    const tileData = [
        {
            title: "Tile 1",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vitae modi veritatis veniam, exercitationem molestiae tempora, tempore ullam obcaecati nemo reiciendis provident error ex animi dolores!"
        },
        {
            title: "Tile 2",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vitae modi veritatis veniam, exercitationem molestiae tempora, tempore ullam obcaecati nemo reiciendis provident error ex animi dolores!"
        },
        {
            title: "Tile 3",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vitae modi veritatis veniam, exercitationem molestiae tempora, tempore ullam obcaecati nemo reiciendis provident error ex animi dolores!"
        }
    ];

    return (
        <div className="tiles">
            <div className="layout">
                <div className="tiles__left">
                    <div className="tile">
                        <h2>We have great features<br />that <span className="blue">you</span> need</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vitae modi veritatis veniam, exercitationem molestiae tempora, tempore ullam obcaecati nemo reiciendis provident error ex animi dolores! Numquam odio ab voluptatibus!</p>
                    </div>
                </div>
                <div className="tiles__right">
                    {tileData.map((tile, index) => (
                        <div className="tile" key={index}>
                            <h3>{tile.title}</h3>
                            <p>{tile.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tiles;