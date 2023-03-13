import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerGameStats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameStats, 'id'>;
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

type LazyGameStats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameStats, 'id'>;
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

export declare type GameStats = LazyLoading extends LazyLoadingDisabled ? EagerGameStats : LazyGameStats

export declare const GameStats: (new (init: ModelInit<GameStats>) => GameStats) & {
  copyOf(source: GameStats, mutator: (draft: MutableModel<GameStats>) => MutableModel<GameStats> | void): GameStats;
}