import styled from "styled-components";
import FilesIcon from "../assets/img/files";

const GistFiles = (files) => {

    let filesComp = []

    for (let i in files.files) {
        filesComp.push(<><FilesIcon fill={'#0265d6'} size={17} /><FileName href={files.files[i].raw_url}>{i}</FileName></>)
    }

    return <Wrapper>{filesComp}</Wrapper>
}

const Wrapper = styled.div`
    display:flex;
`;

const FileName = styled.a`
    color: #0265d6;
    font-size: 0.7rem;
    padding-right:0.5rem;
    padding-left:0.25rem;
    text-decoration: none
`;

export default GistFiles;