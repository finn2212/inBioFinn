module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Finn Stolle Development Portfoilio",
        description:
            "Arbeiten Sie mit mir zusammen für Ihr nächstes IT Projekt",
        author: "Finn Stolle",
        siteLanguage: "DE",
        image: "banner.jpg",
        titleTemplate: "Finn Stolle",
        twitterUsername: "@rainbowit",
        getform_url: "https://getform.io/f/blljqgdb",
        socials: [
            {
                id: 3,
                title: "linkedin",
                path: "https://de.linkedin.com/in/finn-stolle-969922178",
                icon: "Linkedin",
            },
        ],
        contact: {
            phone: "49 176 92623814",
            email: "stolle.finn@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Stolle Web Development",
                short_name: "Stolle Dev",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
