import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

import { EMOTION_ANALYSIS, HASHTAG_INPUT } from './helpers/static';
import "./views/styles/EmotionAnalysisStyles.scss";

const EmotionAnalysis = () => {
    const [hashtagInput, updateHashtagInput] = useState('');
    // const [selectedCountry, updateSelectedCountry] = useState<string>("");

    const onInputChange = (e: any) => {
        updateHashtagInput(e.target.value);
    };

    // const onDropdownItemChange = (e: any, { value }: any) => {
    //     updateSelectedCountry(value);
    //     getScores(value);
    // };

    const onSubmitClick = () => {

    };

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
        </div>
    );
};

export default EmotionAnalysis;
