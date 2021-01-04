import React from 'react'
import './EmailRow.css'

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { Checkbox, IconButton } from '@material-ui/core';

function EmailRow({ title, subject, description, time, id }) {
    return (
        <div className="emailRow">

            <div className="emailRow__options">

                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>

            </div>

            <h3 className="emailRow__title">
{title}
            </h3>

            <div className="emailRow__message">
                <h4>{subject}
                
                <span className="emailRow__description">
                   {description} 
                </span>
                </h4>

            </div>

            <div className="emailRow__description">
{time}
            </div>

        </div>
    )
}

export default EmailRow