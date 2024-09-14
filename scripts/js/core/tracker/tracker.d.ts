import { DebugLevelEnum } from '../utils/console_wrapper';
import { Scenario } from '../utils/scenarios';
import { AllowSubmission } from './../dom/submit_form';
export interface TrackerConfiguration {
    allowSubmission: AllowSubmission;
    debugLevel: DebugLevelEnum;
    bucketName: string;
    keyPrefix: string;
    setup(): void;
}
export declare class Tracker {
    static lastPos: {
        x: number;
        y: number;
        time: number;
    };
    static loadScenario(scen: Scenario): void;
    static start(config: TrackerConfiguration): void;
    static registerEvent(eventType: string): (evData: any) => void;
    static getEventDispatchFunc(eventType: string): (evData: any) => void;
    static attachData(key: string, attribute: any): void;
    static computeAttribute(name: string, compute: (val: any) => any): void;
    private static receiver;
}
//# sourceMappingURL=tracker.d.ts.map