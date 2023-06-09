import { ForeignData } from "./foreignDatas";
import { Identifiers } from "./identifiers";
import { LeadershipSkills } from "./leadershipSkills";
import { Legalities } from "./legalities";
import { PurchaseUrls } from "./purchaseUrls";
import { RelatedCards } from "./relatedCards";
import { Rulings } from "./rulings";

export type Card = {
    artist?: string;
    asciiName?: string;
    attractionLights?: string[];
    availability: string[];
    boosterTypes?: string[];
    borderColor: string;
    cardParts?: string[];
    colorIdentity: string[];
    colorIndicator?: string[];
    colors: string[];
    convertedManaCost: number;
    defense?: string;
    edhrecRank?: number;
    edhrecSaltiness?: number;
    faceConvertedManaCost?: number;
    faceFlavorName?: string;
    faceManaValue?: number;
    faceName?: string;
    finishes: string[];
    flavorName?: string;
    flavorText?: string;
    foreignData?: ForeignData[];
    frameEffects?: string[];
    frameVersion: string;
    hand?: string;
    hasAlternativeDeckLimit?: boolean;
    hasContentWarning?: boolean;
    hasFoil: boolean;
    hasNonFoil: boolean;
    identifiers: Identifiers;
    isAlternative?: boolean;
    isFullArt?: boolean;
    isFunny?: boolean;
    isOnlineOnly?: boolean;
    isOversized?: boolean;
    isPromo?: boolean;
    isRebalanced?: boolean;
    isReprint?: boolean;
    isReserved?: boolean;
    isStarter?: boolean;
    isStorySpotlight?: boolean;
    isTextless?: boolean;
    isTimeshifted?: boolean;
    keywords?: string[];
    language: string;
    layout: string;
    leadershipSkills?: LeadershipSkills;
    legalities: Legalities;
    life?: string;
    loyalty?: string;
    manaCost?: string;
    manaValue: number;
    name: string;
    number: string;
    originalPrintings?: string[];
    originalReleaseDate?: string;
    originalText?: string;
    originalType?: string;
    otherFaceIds?: string[];
    power?: string;
    printings?: string[];
    promoTypes?: string[];
    purchaseUrls: PurchaseUrls;
    rarity: string;
    relatedCards: RelatedCards;
    rebalancedPrintings?: string[];
    rulings: Rulings[];
    securityStamp?: string;
    setCode: string;
    side?: string;
    signature?: string;
    subsets?: string[];
    subtypes: string[];
    supertypes: string[];
    text?: string;
    toughness?: string;
    type: string;
    types: string[];
    uuid: string;
    variations?: string[];
    watermark?: string;
  };