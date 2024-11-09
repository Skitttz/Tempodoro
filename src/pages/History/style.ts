import { flexCenter, gapStyles } from "@styles/utils/generalStyles";
import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  overflow-x: auto;
  
  
  ${flexCenter({direction:"column", align:"stretch"})};
  h1{
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width:40rem){
      padding: 0;
      margin-top: 1rem;
      word-break: keep-all;
      text-wrap: nowrap;
    }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow:auto;
  margin-top: 2rem;

  table{
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    @media (max-width:40rem){
      min-width: 200px;
    }

    th{
      background-color: ${(props) => props.theme["history-header-background"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child{
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child{
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td{
      background-color: ${(props) => props.theme["gray-750"]};
      border-top: 4px solid ${(props) => props.theme["gray-700"]};;
      font-size: 0.875rem;
      line-height: 1.6;
      padding: 1rem;

      &:first-child{
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child{
        padding-right: 1.5rem;
      }
    }

    
  }
`;



const STATUS_COLORS = {
  yellow: 'history-item-circle-current',
  green: 'history-item-circle-finished',
  red: 'history-item-circle-interrupted',
  } as const
  
  export interface IStatus {
    statusColor: keyof typeof STATUS_COLORS;
  }
  
  export const Status = styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== 'statusColor', 
  })<IStatus>`
    ${flexCenter({ direction: "row" })};
    ${gapStyles('0.5rem')};
  
    &::before {
      content: "";
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    }
  `;