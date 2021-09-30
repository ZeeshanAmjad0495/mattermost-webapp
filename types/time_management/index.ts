// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Dictionary} from 'mattermost-redux/types/utilities';

export type WorkItem = {
    title: string;
    time: number;
}

export type WorkDay = {
    date: Date;
    queue: WorkItem[];
    allowedMana: number;
}

export type TimeState = {
    time: {
        workItemsByDay: Dictionary<WorkItem[]>;
    };
};