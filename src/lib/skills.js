// A skill at or above this level is shown as a "current strength";
// below it, the skill is shown as "still developing".
// This is only a display rule. The numbers themselves are yours.
export const STRENGTH_THRESHOLD = 60;

export const isCurrentStrength = (level) => level >= STRENGTH_THRESHOLD;
