import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import CommentIcon from '../assets/img/comment';
import FileIcon from '../assets/img/file';
import ForkIcon from '../assets/img/fork';
import StarIcon from '../assets/img/star';
import dateFormat from '../helpers/commonHelper';
import { getPublicGists } from '../services/gistService';
import GistFiles from './GistFiles';
import { setGistList, setLoading } from '../store/slices/gistSlice';

const GistList = () => {
    
    const dispatch = useDispatch();
    const gistList = useSelector((state) => (state.gists.gistList))
    const loading = useSelector((state) => (state.gists.loading))

    useEffect(() => {
        getPublicGists().then((result) => {
            dispatch(setGistList(result.data))
            dispatch(setLoading(false))
        })
        .catch((error) => {
            dispatch(setLoading(false))
            dispatch(setGistList([]))
        })
    },[])

    return (
        !loading ? (
            gistList.length > 0 ? (
                gistList.map((item) => (
                    <GistCard>
                        <GistCardHeader>
                            <GistCardCol>
                                <ProfileImage src={item.owner.avatar_url} />
                                <ProfileName>{item.owner.login}</ProfileName>
                                <GistColFooter>
                                    <GistCreated>Created at: {dateFormat(item.created_at)}</GistCreated>
                                    <GistLastUpdate>Last Update: {dateFormat(item.updated_at)}</GistLastUpdate>
                                </GistColFooter>
                            </GistCardCol>
                            <GistCardCol>
                                <ProfileQualitiesWrapper>
                                <ProfileQuality>
                                    <FileIcon fill={'#0265d6'} size={18} />
                                    <Text>{Object.keys(item.files).length} Files</Text>
                                </ProfileQuality>
                                <ProfileQuality>
                                    <ForkIcon fill={'#0265d6'} size={14} />
                                    <Link href={item.forks_url}>Forks</Link>
                                </ProfileQuality>
                                <ProfileQuality>
                                    <CommentIcon fill={'#0265d6'} size={14} />
                                    <Link href={item.comments_url}>Comments</Link>
                                </ProfileQuality>
                                <ProfileQuality>
                                    <StarIcon fill={'#0265d6'} size={14} />
                                    <Link href={item.owner.starred_url}>Stars</Link>
                                </ProfileQuality>
                                </ProfileQualitiesWrapper>
                            </GistCardCol>
                        </GistCardHeader>
                        <GistCardContent>
                            <GistDiscription>{item.description}</GistDiscription>
                            <GistFiles files={item.files} />
                        </GistCardContent>
                </GistCard>
                ))
            ) : <GistNotFound>Gist Not Found</GistNotFound>
        ) : <GistNotFound>Loading...</GistNotFound>
)}

const GistCard = styled.div`
    max-width:700px;
    min-height:120px;
    padding:1rem;
    border-bottom:1px solid #eee;
    margin:0 auto;
`;

const GistCardHeader = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

const GistCardCol = styled.div`
    display:flex;
    align-items: center;
    flex-wrap:wrap;
`;

const ProfileImage = styled.img`
    border-radius:10rem;
    width:2rem;
    height:2rem;
`;

const ProfileName = styled.div`
    color:#0265d6;
    padding-left:0.4rem;
    font-weight:500;
`;

const GistCardContent = styled.div`
    width:100%;
    word-wrap: break-word;
`;

const ProfileQualitiesWrapper = styled.div`
    width:100%;
    display:flex;
`;

const ProfileQuality = styled.div`
    display:flex;
    flex-wrap:nowrap;
    justify-content:space-between;
    padding:0.3rem;
    font-size:0.7rem
`;

const Text = styled.span`
    color:#0265d6;
    font-size:0.7rem;
    margin-left:0.1rem;
    white-space: nowrap;
`
const Link = styled.a`
    color: #0265d6;
    font-size:0.7rem;
    text-decoration:none;
    margin-left:0.2rem;
`;

const GistColFooter = styled.div`
    flex-basis:100%;
    display:flex;
    padding:0.2rem
`;

const GistCreated = styled.span`
    color:#626465;
    font-size:0.7rem;
`

const GistLastUpdate = styled.span`
    color:#626465;
    font-size:0.7rem;
    padding-left:0.5rem;
`

const GistDiscription = styled.p`
    color:#626465;
    font-size:1rem
`;

const GistNotFound = styled.div`
    display:flex;
    max-width:700px;
    margin:0 auto;
    height: calc( 100vh - 68px );
    justify-content:center;
    align-items:center;
    font-size:2rem;

`

export default GistList
