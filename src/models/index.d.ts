import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerGameStatistics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameStatistics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly winDistribution?: number | null;
  readonly gamesFailed?: number | null;
  readonly currentStreak?: number | null;
  readonly bestStreak?: number | null;
  readonly totalGames?: number | null;
  readonly successRate?: number | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGameStatistics = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameStatistics, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly winDistribution?: number | null;
  readonly gamesFailed?: number | null;
  readonly currentStreak?: number | null;
  readonly bestStreak?: number | null;
  readonly totalGames?: number | null;
  readonly successRate?: number | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GameStatistics = LazyLoading extends LazyLoadingDisabled ? EagerGameStatistics : LazyGameStatistics

export declare const GameStatistics: (new (init: ModelInit<GameStatistics>) => GameStatistics) & {
  copyOf(source: GameStatistics, mutator: (draft: MutableModel<GameStatistics>) => MutableModel<GameStatistics> | void): GameStatistics;
}