// app/waterNozzle.tsx
import ProductDetails from './ProductDetails';
import ProductReviews from './ProductReviews';

const WaterNozzle = () => {
    const productDescription = [
        "Register your local community centers—mosques, Imam Bargahs, schools, hospitals, and more—with Aabshar.",
        "Another detailed product description goes here."
    ];

    const productFeatures = [
        { icon: "electric-pole.png", text: "Save Electricity up to 70%" },
        { icon: "waste-water.png", text: "Save Water 92%" }
    ];

    // Updated reviews array to match the expected structure
    const reviews = [
        { name: "User Name 1", image: "/images/review1.png", text: "This is an amazing product!" },
        { name: "User Name 2", image: "/images/review2.png", text: "Works perfectly and saves water." },
        { name: "User Name 3", image: "/images/review3.png", text: "Highly recommend this product." },
        { name: "User Name 4", image: "/images/review4.png", text: "Great value for the price!" }
    ];

    const moreProducts = [
        { title: "Aerator", description: "A great product to save water.", imageUrl: "/images/aerator.png", buttonText: "Buy Now" },
        { title: "AI Monitoring System", description: "Monitor your water usage efficiently.", imageUrl: "/images/aimonitoringsystem.png", buttonText: "Subscribe Now" },
        { title: "Neck", description: "Innovative neck design for better flow.", imageUrl: "/images/neck.png", buttonText: "Buy Now" },
        { title: "Water Nozzal", description: "Save more water with this nozzle.", imageUrl: "/images/waternozel.png", buttonText: "Buy Now" }
    ];

    return (
        <div>
            <ProductDetails
                product={{
                    name: "Single Mode Water Nozzle",
                    description1: productDescription[0],
                    description2: productDescription[1],
                    features: productFeatures,
                    rating: "★★★★☆",
                    price: "200 PKR",
                    image1: "/images/singlemode.png",
                    image2: "/images/singlemode-alt.png"
                }}
            />
            <ProductDetails
                product={{
                    name: "Double Mode Water Nozzle",
                    description1: productDescription[0],
                    description2: productDescription[1],
                    features: productFeatures,
                    rating: "★★★★☆",
                    price: "200 PKR",
                    image1: "/images/doublemode.png",
                    image2: "/images/doublemode-alt.png"
                }}
            />
            <ProductReviews reviews={reviews} />
        </div>
    );
};

export default WaterNozzle;
