/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GameStatistics } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GameStatisticsUpdateFormInputValues = {
    winDistribution?: number;
    gamesFailed?: number;
    currentStreak?: number;
    bestStreak?: number;
    totalGames?: number;
    successRate?: number;
    userID?: string;
};
export declare type GameStatisticsUpdateFormValidationValues = {
    winDistribution?: ValidationFunction<number>;
    gamesFailed?: ValidationFunction<number>;
    currentStreak?: ValidationFunction<number>;
    bestStreak?: ValidationFunction<number>;
    totalGames?: ValidationFunction<number>;
    successRate?: ValidationFunction<number>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameStatisticsUpdateFormOverridesProps = {
    GameStatisticsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    winDistribution?: PrimitiveOverrideProps<TextFieldProps>;
    gamesFailed?: PrimitiveOverrideProps<TextFieldProps>;
    currentStreak?: PrimitiveOverrideProps<TextFieldProps>;
    bestStreak?: PrimitiveOverrideProps<TextFieldProps>;
    totalGames?: PrimitiveOverrideProps<TextFieldProps>;
    successRate?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameStatisticsUpdateFormProps = React.PropsWithChildren<{
    overrides?: GameStatisticsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gameStatistics?: GameStatistics;
    onSubmit?: (fields: GameStatisticsUpdateFormInputValues) => GameStatisticsUpdateFormInputValues;
    onSuccess?: (fields: GameStatisticsUpdateFormInputValues) => void;
    onError?: (fields: GameStatisticsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameStatisticsUpdateFormInputValues) => GameStatisticsUpdateFormInputValues;
    onValidate?: GameStatisticsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GameStatisticsUpdateForm(props: GameStatisticsUpdateFormProps): React.ReactElement;
