// solution block images
// import image1 from "assets/solutionblock/full-service-details-popup.png";
// import image2 from "assets/solutionblock/full-service-details-popup1.png";
// import image3 from "assets/solutionblock/full-service-details-popup2.png";
// import image4 from "assets/solutionblock/Splash-Screen.png";
import image1 from "assets/featureblock/flyerEatsImages/Grocery-2.png";
import image2 from "assets/featureblock/flyerEatsImages/Grocery-3.png";
import image3 from "assets/featureblock/flyerEatsImages/Grocery-4.png";

// feature Block Images
import featureImage1 from "assets/featureblock/flyerEatsImages/flyerEatFeature.png";

// import featureImage1 from "assets/featureblock/image1.png";
// import featureImage2 from "assets/featureblock/image2.png";
// import featureImage3 from "assets/featureblock/image3.png";
// process Block Images
import processImage1 from "assets/processblock/image1.png";
import processImage2 from "assets/processblock/image2.png";
import processImage3 from "assets/processblock/image3.png";
import processImage4 from "assets/processblock/image4.png";
import processImage5 from "assets/processblock/image5.png";

export const FlyerEatsContent = {
    descriptionBlock:{
        title:"About",
        description:`Do you enjoy shopping? Yes, Indeed, everyone enjoys shopping but
        what if you shop and also earn from it. So this is a product which
        allows you shop for others and you earn while you shop and deliver
        goods to them. Isn’t it cool. Yes, but to make this possible we
        created intuitive, smart and engaging system Factory Fresh mobile
        application for our client.`
    },
    solutionBlock:{
        backgroundColor:"#FFF5ED",
        blockImages:[image1,image2,image3],
        content:[
            {
                title:"Our solution",
                description:`Easy to recognize interface, top notch user experience with restaurant AI grouping, proper segregation of food categories, and different types of other categories available like ready meat, groceries including fresh fruits and vegetables.`
        }
        ]
    },
    featureBlock:{
        backgroundColor:"#FFF5ED",
        blockImages:[featureImage1],
        content:[
            {
                title:"Solution that we provided",
                description:`The features include speed check, statistics about your performance, chat, mailbox and many more. This doesn’t end here, we are core part of Factory Fresh client team to enhance and provide best user experience continuously. `
        },{
            title:"Open cart feature",
            description:`This feature allows you to see the cart and add more items from the main page. While your cart is open, you can still shop for your favourite food and watch your cart simultaniously. Also make any chages in the cart, on the fly.`
        }
        ]
    },
    processBlock:{
        backgroundColor:"#F1F1F1",
        blockImages:[processImage1,processImage2,processImage3,processImage4,processImage5],
        content:[
            {
                title:"Process",
                description:`To start with the project, we followed definite process including information gathering, user research, business analysis, and competitive analysis. After that we started crearting information architecture, data flows, user flows and basic wireframing. That’s how we gave the shape to the project into live application.`
        }
        ]
    },
};