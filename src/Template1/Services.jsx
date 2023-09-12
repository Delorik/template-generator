const Services = () => {

    const service = [
        {
            title: "Effective websites",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vitae modi veritatis veniam, exercitationem molestiae tempora, tempore ullam obcaecati nemo reiciendis provident error ex animi dolores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
    ];
    const renderedServices = [];

    for (let i = 0; i < 4; i++) {
        renderedServices.push(
            <li key={i}>
                <span className="title">{service[0].title}</span>
                <p>{service[0].content}</p>
            </li>
        )
    }

    return (
        <div className="services">
            <div className="layout">
                <h2>Best service we provide</h2>
                <div className="services__flex">
                    <div className="services__left">
                        <ul>{renderedServices}</ul>
                    </div>
                    <div className="services__right">
                        <ul>{renderedServices}</ul>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Services;