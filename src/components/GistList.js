import React, { useEffect, useState } from 'react'
import { getPublicGists } from '../services/gistService';

const GistList = () => {
    useEffect(()=>{
        const promise = Promise.resolve(getPublicGists())
        promise.then((value)=>{
            console.log("4444", value.data);
        })
    },[])
    return <GistCard>
            <GistCardHeader>
                <GistCardCol>
                    <ProfileImage></ProfileImage>
                    <ProfileName></ProfileName>
                </GistCardCol>
                <GistCardCol>
                    <ProfileQualitiesWrapper>
                    <ProfileQualities
                        icon={""}
                        value={""}
                    />
                    <ProfileQualities
                        icon={""}
                        value={""}
                    />
                    <ProfileQualities
                        icon={""}
                        value={""}
                    />
                    <ProfileQualities
                        icon={""}
                        value={""}
                    />
                    </ProfileQualitiesWrapper>
                </GistCardCol>
            </GistCardHeader>
            <GistCardContent></GistCardContent>
    </GistCard>
}

const ProfileQualities = (icon, value) => (
    <Wrapper>
        
    </Wrapper>
)

export default GistList
