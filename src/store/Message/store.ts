import { Module } from 'vuex';
import { Messages, RootState } from '../types';
import actions from './actions';
import mutations from './mutations';

const state: Messages = {
    messages: [],
 };

export const messages: Module<Messages, RootState> = {
    namespaced: true,
    state,
    actions,
    mutations,
 };
