import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Label, List } from 'semantic-ui-react';

const Landing = () => {
    return (
        <div>
            <Header as='h1'>Emotion Analysis</Header>
            <Header as='h2'>Developed by: Group 13</Header>
            <List>
                <List.Header>Ashly Chinnu Varghese</List.Header>
                <List.Header>Manik Mahajan</List.Header>
                <List.Header>Tincy Thomas</List.Header>
            </List>
            <Header as='h2'>How to use?</Header>
            <List ordered>
                <List.Item>Go to the link - <Link to="/emotionAnalysis">Emotion Analysis</Link></List.Item>
                <List.Item>Enter a hashtag in the input box.</List.Item>
                <List.Item>Click on the search button.</List.Item>
                <List.Item>The tweets will be displayed with the emotion.</List.Item>
            </List>
        </div >
    );
};

export default Landing;
