import { Icon } from "@chakra-ui/react"

const Location = () => {
    return (
        <Icon fontSize={{
            base: "primary.mb",
            md: "primary.tb",
            lg: "primary.dt"
        }}>
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.97229 29.3947C1.40469 17.0526 0 15.7859 0 11.25C0 5.03678 4.47714 0 10 0C15.5229 0 20 5.03678 20 11.25C20 15.7859 18.5953 17.0526 11.0277 29.3947C10.5311 30.2018 9.46885 30.2017 8.97229 29.3947ZM10 15.9375C12.3012 15.9375 14.1667 13.8388 14.1667 11.25C14.1667 8.66115 12.3012 6.5625 10 6.5625C7.6988 6.5625 5.83333 8.66115 5.83333 11.25C5.83333 13.8388 7.6988 15.9375 10 15.9375Z" fill="#FF6542" />
            </svg>
        </Icon>
    )
}

export default Location
