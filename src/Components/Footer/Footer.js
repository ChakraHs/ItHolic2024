import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import logo from "./logo.png"



const Footer = () => {
    // Styles :
    const footerDivSX = {
        height:"auto",
        marginTop:"300px",
        backgroundColor:"var(--black)",
        width: "100%"
    }
    const footerSX = {
        height: "100%",
        position:"relative",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:"5rem",
    }
    const contentSX = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        gap:"3rem",
        margin:"175px 0 50px 0"
    }
    const linkContainerSX = {
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        gap:"2rem"
    }
    const eitcLogoStyle = {
        width:"300px",
        position:"absolute",
        top:0,
        left:"49%",
        transform:"translate(-50%,-50%)"
    }
    const linkStyle = {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        gap:"1rem",
        alignItems:"center"
    }


    return (
        <div style={footerDivSX}>
            <Container sx={footerSX}>
                <img src={logo} style={ eitcLogoStyle }/>
                <Box sx={ contentSX }>
                    <Typography sx={{ textAlign:"center" }} variant={"h4"} color={"white"}>
                        Get in touch ?
                    </Typography>
                    <Box sx={ linkContainerSX }>
                        <Box>
                            <a href={"https://www.linkedin.com/company/ensias-it-club/"} style={linkStyle} target="_blank">
                                <svg width="45" height="45" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M735.7 0H64.3C28.8 0 0 28.8 0 64.3V735.7C0 771.2 28.8 800 64.3 800H735.7C771.2 800 800 771.2 800 735.7V64.3C800 28.8 771.2 0 735.7 0V0ZM735.7 736C287.9 735.9 64 735.8 64 735.7C64.1 287.9 64.2 64 64.3 64C512.1 64.1 736 64.2 736 64.3C735.9 512.1 735.8 736 735.7 736ZM118.6 299.9H237.3V681.7H118.6V299.9ZM178 247.7C215.9 247.7 246.8 216.9 246.8 178.9C246.8 169.865 245.02 160.919 241.563 152.571C238.105 144.224 233.038 136.64 226.649 130.251C220.26 123.862 212.676 118.795 204.329 115.337C195.981 111.88 187.035 110.1 178 110.1C168.965 110.1 160.019 111.88 151.671 115.337C143.324 118.795 135.74 123.862 129.351 130.251C122.962 136.64 117.895 144.224 114.437 152.571C110.98 160.919 109.2 169.865 109.2 178.9C109.1 216.9 139.9 247.7 178 247.7ZM430.3 492.8C430.3 443 439.8 394.8 501.5 394.8C562.3 394.8 563.2 451.7 563.2 496V681.7H681.8V472.3C681.8 369.5 659.6 290.4 539.5 290.4C481.8 290.4 443.1 322.1 427.2 352.1H425.6V299.9H311.7V681.7H430.3V492.8Z" fill="#F9F7F7"/>
                                </svg>
                                {/*<Typography variant={"h6"} color={"white"} sx={{fontWeight:300}}>*/}
                                {/*    itclubensias@gmail.com*/}
                                {/*</Typography>*/}
                            </a>
                        </Box>
                        <Box>
                            <a href={"https://www.instagram.com/ensias_it_club/"} style={linkStyle} target="_blank">
                                <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7087 0.220996C16.177 0.108496 16.964 0.0834961 23.2516 0.0834961C29.5392 0.0834961 30.3262 0.110579 32.7924 0.220996C35.2587 0.331413 36.9421 0.720996 38.4151 1.28558C39.9575 1.86266 41.3569 2.76475 42.5142 3.93141C43.6926 5.07516 44.6017 6.4585 45.1825 7.98766C45.7548 9.446 46.1462 11.1127 46.2599 13.5502C46.3735 15.9981 46.3988 16.7772 46.3988 23.0002C46.3988 29.2252 46.3714 30.0043 46.2599 32.4481C46.1483 34.8856 45.7548 36.5522 45.1825 38.0106C44.6017 39.5399 43.6911 40.9256 42.5142 42.071C41.3569 43.2377 39.9575 44.1377 38.4151 44.7127C36.9421 45.2793 35.2587 45.6668 32.7967 45.7793C30.3262 45.8918 29.5392 45.9168 23.2516 45.9168C16.964 45.9168 16.177 45.8897 13.7087 45.7793C11.2467 45.6689 9.56325 45.2793 8.09025 44.7127C6.54554 44.1376 5.14598 43.2361 3.989 42.071C2.8114 40.9266 1.90011 39.5416 1.31866 38.0127C0.748403 36.5543 0.357006 34.8877 0.243375 32.4502C0.129744 30.0022 0.104492 29.2231 0.104492 23.0002C0.104492 16.7752 0.131848 15.996 0.243375 13.5543C0.354902 11.1127 0.748403 9.446 1.31866 7.98766C1.90097 6.45867 2.81296 5.07373 3.99111 3.92933C5.14644 2.76371 6.5446 1.8615 8.08815 1.28558C9.56115 0.720996 11.2446 0.333496 13.7066 0.220996H13.7087ZM32.6052 4.346C30.1642 4.23558 29.4319 4.21266 23.2516 4.21266C17.0713 4.21266 16.339 4.23558 13.8981 4.346C11.6402 4.44808 10.4155 4.821 9.59902 5.13558C8.51953 5.55225 7.74725 6.046 6.9371 6.84808C6.16914 7.58777 5.57812 8.48825 5.20738 9.4835C4.88964 10.2918 4.51297 11.5043 4.40986 13.7397C4.29833 16.1564 4.27518 16.8814 4.27518 23.0002C4.27518 29.1189 4.29833 29.8439 4.40986 32.2606C4.51297 34.496 4.88964 35.7085 5.20738 36.5168C5.57774 37.5106 6.16904 38.4127 6.9371 39.1522C7.68413 39.9127 8.59528 40.4981 9.59902 40.8647C10.4155 41.1793 11.6402 41.5522 13.8981 41.6543C16.339 41.7647 17.0692 41.7877 23.2516 41.7877C29.434 41.7877 30.1642 41.7647 32.6052 41.6543C34.8631 41.5522 36.0878 41.1793 36.9042 40.8647C37.9837 40.4481 38.756 39.9543 39.5661 39.1522C40.3342 38.4127 40.9255 37.5106 41.2959 36.5168C41.6136 35.7085 41.9903 34.496 42.0934 32.2606C42.2049 29.8439 42.2281 29.1189 42.2281 23.0002C42.2281 16.8814 42.2049 16.1564 42.0934 13.7397C41.9903 11.5043 41.6136 10.2918 41.2959 9.4835C40.875 8.41475 40.3763 7.65016 39.5661 6.84808C38.819 6.08781 37.9094 5.50269 36.9042 5.13558C36.0878 4.821 34.8631 4.44808 32.6052 4.346ZM20.2951 30.0647C21.9462 30.7452 23.7848 30.8371 25.4967 30.3246C27.2087 29.8121 28.6878 28.7271 29.6815 27.2548C30.6752 25.7826 31.1218 24.0145 30.945 22.2525C30.7682 20.4905 29.979 18.8439 28.7122 17.5939C27.9047 16.7949 26.9283 16.1831 25.8532 15.8026C24.7782 15.422 23.6313 15.2822 22.4951 15.3931C21.3589 15.5041 20.2618 15.863 19.2825 16.4442C18.3033 17.0253 17.4664 17.8142 16.8321 18.754C16.1978 19.6938 15.7818 20.7612 15.6142 21.8792C15.4465 22.9973 15.5313 24.1383 15.8625 25.22C16.1937 26.3017 16.763 27.2973 17.5295 28.135C18.2959 28.9727 19.2405 29.6318 20.2951 30.0647ZM14.8387 14.671C15.9435 13.5772 17.2551 12.7095 18.6986 12.1176C20.1421 11.5256 21.6892 11.2209 23.2516 11.2209C24.814 11.2209 26.3612 11.5256 27.8047 12.1176C29.2482 12.7095 30.5597 13.5772 31.6646 14.671C32.7694 15.7648 33.6457 17.0633 34.2436 18.4924C34.8416 19.9216 35.1493 21.4533 35.1493 23.0002C35.1493 24.547 34.8416 26.0788 34.2436 27.5079C33.6457 28.937 32.7694 30.2355 31.6646 31.3293C29.4333 33.5384 26.4071 34.7794 23.2516 34.7794C20.0962 34.7794 17.0699 33.5384 14.8387 31.3293C12.6074 29.1203 11.3539 26.1242 11.3539 23.0002C11.3539 19.8761 12.6074 16.88 14.8387 14.671ZM37.788 12.9752C38.0618 12.7195 38.281 12.412 38.4326 12.0709C38.5842 11.7299 38.6651 11.3622 38.6706 10.9896C38.6761 10.617 38.606 10.2471 38.4645 9.90185C38.323 9.55656 38.113 9.24289 37.8469 8.97941C37.5807 8.71593 37.2639 8.50799 36.9151 8.36791C36.5664 8.22783 36.1928 8.15845 35.8165 8.16388C35.4401 8.16931 35.0687 8.24944 34.7242 8.39953C34.3797 8.54962 34.0692 8.76661 33.8109 9.03766C33.3087 9.56481 33.0337 10.265 33.0443 10.9896C33.055 11.7142 33.3505 12.4062 33.8681 12.9186C34.3856 13.431 35.0846 13.7236 35.8165 13.7341C36.5483 13.7447 37.2556 13.4724 37.788 12.9752Z" fill="#F9F7F7"/>
                                </svg>
                                {/*<Typography variant={"h6"} color={"white"} sx={{fontWeight:300}}>*/}
                                {/*    @ensias_it_club*/}
                                {/*</Typography>*/}
                            </a>
                        </Box>
                        <Box>
                            <a href={"https://www.facebook.com/ensiasitclub"} style={linkStyle} target="_blank">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.401 0.46875H2.10214C1.22919 0.46875 0.523926 1.16699 0.523926 2.03125V37.9688C0.523926 38.833 1.22919 39.5312 2.10214 39.5312H38.401C39.274 39.5312 39.9793 38.833 39.9793 37.9688V2.03125C39.9793 1.16699 39.274 0.46875 38.401 0.46875ZM36.8228 36.4062H27.7432V24.4043H32.8724L33.6417 18.5107H27.7432V14.7461C27.7432 13.0371 28.2216 11.875 30.6925 11.875H33.844V6.60156C33.2965 6.52832 31.4273 6.36719 29.2474 6.36719C24.7002 6.36719 21.5881 9.11621 21.5881 14.1602V18.5059H16.4491V24.3994H21.5931V36.4062H3.68035V3.59375H36.8228V36.4062Z" fill="#F9F7F7"/>
                                </svg>
                                {/*<Typography variant={"h6"} color={"white"} sx={{fontWeight:300}}>*/}
                                {/*    ENSIAS IT Club*/}
                                {/*</Typography>*/}
                            </a>
                        </Box>
                    </Box>
                    <Typography variant={"h6"} color={"white"} sx={{textAlign:"center"}}>
                        © Copyright EITC
                    </Typography>
                </Box>
            </Container>
        </div>
    )
}

export default Footer;