/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GameStatisticsCreateFormInputValues = {
    winDistribution?: number;
    gamesFailed?: number;
    currentStreak?: number;
    bestStreak?: number;
    totalGames?: number;
    successRate?: number;
    userID?: string;
};
export declare type GameStatisticsCreateFormValidationValues = {
    winDistribution?: ValidationFunction<number>;
    gamesFailed?: ValidationFunction<number>;
    currentStreak?: ValidationFunction<number>;
    bestStreak?: ValidationFunction<number>;
    totalGames?: ValidationFunction<number>;
    successRate?: ValidationFunction<number>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameStatisticsCreateFormOverridesProps = {
    GameStatisticsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    winDistribution?: PrimitiveOverrideProps<TextFieldProps>;
    gamesFailed?: PrimitiveOverrideProps<TextFieldProps>;
    currentStreak?: PrimitiveOverrideProps<TextFieldProps>;
    bestStreak?: PrimitiveOverrideProps<TextFieldProps>;
    totalGames?: PrimitiveOverrideProps<TextFieldProps>;
    successRate?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameStatisticsCreateFormProps = React.PropsWithChildren<{
    overrides?: GameStatisticsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GameStatisticsCreateFormInputValues) => GameStatisticsCreateFormInputValues;
    onSuccess?: (fields: GameStatisticsCreateFormInputValues) => void;
    onError?: (fields: GameStatisticsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameStatisticsCreateFormInputValues) => GameStatisticsCreateFormInputValues;
    onValidate?: GameStatisticsCreateFormValidationValues;
} & React.CSSProperties>;
export default function GameStatisticsCreateForm(props: GameStatisticsCreateFormProps): React.ReactElement;
