import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    border: 1px solid black;
    border-radius: 20px;
    height: 80%;

    button {
        border-radius: 0 0 20px 20px;
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: 'Montserrat', sans-serif;
        padding: 20px;
    }
`;
