import { RuleConverter } from "../converter";

export const convertClassName: RuleConverter = () => {
    return {
        rules: [
            {
                ruleName: "@typescript-eslint/class-name-casing",
            },
        ],
    };
};
