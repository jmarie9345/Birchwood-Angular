/** @module transition */ /** for typedoc */
import { TransitionHookOptions } from "./interface";
import { IInjectable } from "../common/common";
import { ResolveContext } from "../resolve/module";
export declare class TransitionHook {
    private fn;
    private locals;
    private resolveContext;
    private options;
    constructor(fn: IInjectable, locals: any, resolveContext: ResolveContext, options: TransitionHookOptions);
    private isSuperseded;
    invokeHook(moreLocals: any): any;
    /**
     * This method handles the return value of a Transition Hook.
     *
     * A hook can return false, a redirect (TargetState), or a promise (which may resolve to false or a redirect)
     */
    handleHookResult(hookResult: any): Promise<any>;
    toString(): string;
    /**
     * Given an array of TransitionHooks, runs each one synchronously and sequentially.
     *
     * Returns a promise chain composed of any promises returned from each hook.invokeStep() call
     */
    static runSynchronousHooks(hooks: TransitionHook[], locals?: {}, swallowExceptions?: boolean): Promise<any>;
}
