import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 80%;
    border: 1px solid black;
    border-radius: 20px;
    height: 100%;

    button {
        border-radius: 0 0 20px 20px;
        background-color: gray;
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
