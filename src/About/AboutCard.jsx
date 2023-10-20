
const AboutCard = ({ data }) => {
    let { name, img } = data
    return (
        <div>
            <div className="hero  bg-base-200 rounded-lg mb-5">
                <div className="hero-content flex-col lg:flex-row items-center">
                    <img src={img} className="w-80 rounded-lg shadow-2xl max-h-80" />
                    <div className="mx-5">
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">Introducing the all-new StellarX Pro, the latest innovation from the tech giant, OmniTech. This cutting-edge device redefines the smartphone experience with its sleek design, powerhouse performance, and groundbreaking features. With the StellarX Pro,  be at the forefront of the mobile revolution. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;