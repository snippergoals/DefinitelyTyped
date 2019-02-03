import { VariableDeclarator } from "ast-types/gen/nodes";
import { ASTNode, NodePath, Type } from "recast";
import { Collection } from "../Collection";

type ASTPath<N> = NodePath<N, N>;

export interface TraversalMethods {
    /**
     * Find nodes of a specific type within the nodes of this collection.
     */
    find<T>(type: Type<T>, filter?: ((value: any) => boolean) | object): Collection<T>;

    /**
     * Returns a collection containing the paths that create the scope of the
     * currently selected paths. Dedupes the paths.
     */
    closestScope(): Collection<ASTNode>;

    /**
     * Traverse the AST up and finds the closest node of the provided type.
     */
    closest<T>(type: Type<T>, filter?: any): Collection<T>;

    /**
     * Finds the declaration for each selected path. Useful for member expressions
     * or JSXElements. Expects a callback function that maps each path to the name
     * to look for.
     *
     * If the callback returns a falsey value, the element is skipped.
     */
    getVariableDeclarators(nameGetter: (...args: any[]) => any): Collection<VariableDeclarator>;
}

export interface MutationMethods<N> {
    /**
     * Simply replaces the selected nodes with the provided node. If a function
     * is provided it is executed for every node and the node is replaced with the
     * functions return value.
     */
    replaceWith<T>(nodes: T | T[] | ((path: ASTPath<N>, i: number) => T)): Collection<T>;

    /**
     * Inserts a new node before the current one.
     */
    insertBefore(insert: any): Collection<N>;

    /**
     * Inserts a new node after the current one.
     */
    insertAfter(insert: any): Collection<N>;

    remove(): Collection<N>;
}

export function register(): void;

export { }; // to shut off automatic exporting
