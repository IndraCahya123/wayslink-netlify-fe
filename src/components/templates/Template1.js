function Template1(props) {
    const brand = props.brand;
    console.log(brand);
    return (
        <div className="d-flex align-items-center flex-column w-25 p-2" style={{ background: "#E5E5E5", height: 400 }}>
            <img
                src={brand.image}
                alt="Image Brand"
                width="80px"
                height="80px"
                style={{ borderRadius: "50%" }}
            />
            <span style={{ fontFamily: "'Times New Roman'", fontSize: 24, fontWeight: "bolder", margin: "10px 0" }}>{ brand.title }</span>
            <span className="text-secondary mb-3">{brand.description}</span>
            {brand.links.map(link => {
                return <LinkPreviewCard link={link} />
            })}
        </div>
    )
}

const LinkPreviewCard = (props) => {
    const link = props.link;

    return (
        <>
            <div className="d-flex align-items-center w-100 mb-3 p-2" style={{ position: "relative", cursor: "pointer", background: "#000", color: "#fff", borderRadius: 5 }}>
                <img
                    src={link.image}
                    alt="Link Image"
                    width="25px"
                    height="25px"
                    className="ml-3 bg-light"
                    style={{ borderRadius: "50%" }}
                />
                <span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }} >{ link.title }</span>
            </div>
        </>
    );
}

export default Template1
