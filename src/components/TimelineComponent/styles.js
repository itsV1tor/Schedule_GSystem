import styled from "styled-components";

export const Container = styled.main`
    margin: 0 auto;
    max-width: 80rem;
    height: 600px;

    .vis-item{
        border: none;
        border-radius: 14px;
    }
    .vis-delete{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 100%;
        width: 29px;
    }
    .vis-item-content{
        padding: 5px;
        font-size: .75rem;

        font-weight: bold;
        color: #424242;
    }
    .vis-timeline{
        border: none;
    }
    .vis-label{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .vis-inner{
        padding: 20px;
    }
    .vis-even{
        border: none;
        
    }
    .cell{
        background-color: ${({ theme }) => theme.colors.gray_100};
        border: 1px solid rgba(0, 0, 0, 0.10);
    }
`;