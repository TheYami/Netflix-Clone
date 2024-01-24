import styled from 'styled-components'
import headerBG from '../../assets/img/header-bg.jpg'

export const HeaderCon = styled.section`
    height:720px;
    background:url(${headerBG});
    box-shadow:inset 0 0 0 2000px rgba(0,0,0,0.6);
    background-position:center;
    background-size:cover;
    border-bottom:8px solid #222;
`

export const NavCon = styled.nav`
    display:flex;
    justify-content:space-between;
    padding:2rem 4rem;

    svg{
        width:150px;
        color: rgb(229,9,20);
        fill:currentColor;
    }
`

export const Menus = styled.ul`
    display:flex;
    list-style:none;

    li{
        margin:0 2rem;

        a{
            color:#fff;
            text-decoration:none;
        }
    }
`

export const LangBtn = styled.a`
    border:1px solid #fff;
    border-radius:2px;
    background:transparent;
    color:#fff;
    padding:0.5rem 1rem;
`

export const SinginBtn = styled.a`
    color:#fff;
    background-color: #e50914;
    border-radius:4px;
    padding:0.5rem 1rem;
    border:none;
`

export const HeaderTitile = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:600px;
    text-align:center;

    h1{
        font-size:3rem;
        color:#fff;
        font-family:'Arial';
        font-weight:900;
    }

    h3{
        font-size:1.5rem;
        font-weight:400;
        color:#fff;
        margin-top:1rem;
    }

    p{
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.5;
        color:#fff;
        margin-top:1rem;
    }

    input{
        width:500px;
        padding:1.5rem;
        border-radius:5px;
        background:transparent;
        outline:none;
        border:1px solid #fff;
        margin-top:1rem;
        margin-right:.5rem
    }

    button{
        background-color:#e50914;
        color:#fff;
        padding:20px 1rem;
        width:200px;
        border:none;
        font-size:1.5rem;
        border-radius:5px;
        position:relative;
        top:3px;
        cursor:pointer;
    }

    button:hover{
        background-color:#e93914
    }
`