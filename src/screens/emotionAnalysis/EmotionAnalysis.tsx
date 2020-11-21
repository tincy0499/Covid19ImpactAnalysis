import React, { Fragment, useState } from 'react';
import { Button, Input, Loader, Table } from 'semantic-ui-react';
import api from '../../commons/api';
import { normalizeEmotionData } from '../dashboard/helpers/utils';

import { EMOTION_ANALYSIS, HASHTAG_INPUT } from './helpers/static';
import "./views/styles/EmotionAnalysisStyles.scss";

const EmotionAnalysis = () => {
    const [hashtagInput, updateHashtagInput] = useState('');
    const [data, updateData] = useState<any>('');
    const [isLoadingScores, updateIsLoadingScores] = useState<boolean>(false);
    // const [selectedCountry, updateSelectedCountry] = useState<string>("");

    const onInputChange = (e: any) => {
        updateHashtagInput(e.target.value);
    };

    // const onDropdownItemChange = (e: any, { value }: any) => {
    //     updateSelectedCountry(value);
    //     getScores(value);
    // };

    const onSubmitClick = async () => {
        updateIsLoadingScores(true);
        try {
            const { data } = await api.get(`https://lab9-buildingonapi.herokuapp.com/tweet/score/${hashtagInput}`);
            updateData(normalizeEmotionData(data));
        } catch (err) {
            // ToDo: handle api failure
        }
        updateIsLoadingScores(false);
    };

    const getImpactView = () => {
        if (!data) {
            return null;
        }

        return (
            <Fragment>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Tweet</Table.HeaderCell>
                            <Table.HeaderCell>Emotion</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {data.map((currentKey) => {
                        return (
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{currentKey.tweet}</Table.Cell>
                                    <Table.Cell>{currentKey.score}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        );
                    })}
                </Table>
            </Fragment>
        );
    };

    if (isLoadingScores) {
        return <Loader size="huge" active />;
    }

    return (
        <div>
            {/* <Select
                placeholder={LOCATION_DROPDOWN.PLACEHOLDER}
                options={LOCATION_DROPDOWN.ITEMS}
                value={selectedCountry}
                onChange={onDropdownItemChange}
                className="emotion-analysis__dropdown"
                fluid
                search
            /> */}
            <form onSubmit={onSubmitClick}>
                <Input
                    placeholder={HASHTAG_INPUT.PLACEHOLDER}
                    onChange={onInputChange}
                    value={hashtagInput}
                    className="emotion-analysis__input"
                    fluid
                />
                <Button
                    primary
                    onClick={onSubmitClick}
                    disabled={!hashtagInput}
                >
                    {EMOTION_ANALYSIS.SUBMIT_BUTTON}
                </Button>
            </form>
            {getImpactView()}
        </div>
    );
};

export default EmotionAnalysis;
