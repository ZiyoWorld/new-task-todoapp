import styled from "styled-components";


const setColor = ({color})=> {
    switch(color){
        case "add" : return "rgb(5,152,98)";
        case "delete": return "#093545";
        case "edit" : return "rgb(5,152,98)";
        case "input" : return "#093545";
        case "item" : return "#03A9F4";
        default : return "#000";
    }
};

export const Container = styled.div`
    width: 40%;
    height: 550px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const AddForm = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 3px solid #c7c7c7;
    padding: 20px;
`;
export const Wrapper = styled.div`
   display: flex;
   justify-content: ${({button})=> button ? "flex-end" : "center"};
   align-items: center;
   width: ${({button})=> button ? "100px": "100%"};
`;
export const Input = styled.input`
   width: ${({change})=> change ? "100%" : "70%"};;
   height: 45px;
   outline: none;
   font-size: 20px;
   padding: 0 20px;
   background-color: ${setColor};
   border: none;
   color: white;
`;
export const Button = styled.button`
   width: 100px;
   height: 45px;
   background-color: ${setColor};
   border: none;
   font-size: 16px;
   color: white;
   &:active{
    font-size: 18px;
   }
`;



export const ListView = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 5px 35px;
`;

export const TodoItem = styled.div`
    width: 100%;
    height: 45px;
    display:flex;
    justify-content: ${({change})=> change ? "center" : "space-between"};
    align-items: center;
    margin: 5px 0;
`;
export const View = styled.div`
    width: 380px;
    height: 45px;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5px;
    padding-right: 5px;
    color: #fff;
    background-color: ${setColor};
    overflow: auto;
`;
export const ViewChild = styled.div`
    width: 380px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const ButtonList = styled(Button)`
   width: ${({change})=> change ? "0" : "100px"};
   height: 45px;
   font-size: 15px;
`;
