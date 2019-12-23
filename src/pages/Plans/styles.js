import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;

export const Title = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  color: #444444;
  
  button{
  background: #EE4D64;
  border-radius: 4px;
  border:none;
  width: 142px;
  height: 36px;
  font-size:14px bold;
  color:#FFFFFF;
  }

  input {
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 4px;
    width: 237px;
    height: 36px;
    margin-left:30px;
    ::placeholder{
      font-size: 14px bold;
      line-height: 16px;
      text-align: center;
      color: #999999;;
    }

    
  }
`;

export const Table = styled.table`
    background: #fff;
    max-width: 900px;
    width:100%;
    margin: 20px auto;
    padding: 30px;
    text-align:left;
  tbody{
    color:#666666;
    td{
      padding-top:16px;
      text-align:left;
      
    }
    a{
      color:#4D85EE;
      cursor: pointer;
    }

    button{
      color:#DE3B3B;
      border:none;
      background:none;
    }
  }
 

`;