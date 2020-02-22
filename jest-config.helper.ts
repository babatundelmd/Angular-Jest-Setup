// test-config.helper.ts
import { ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { Type } from '@angular/core';

type CompilerOptions = Partial<{
    providers: any[];
    useJit: boolean;
    preserveWhitespaces: boolean;
}>;
export type ConfigureFn = (testBed: typeof TestBed) => void;

export const configureTests = (
    configure: ConfigureFn,
    compilerOptions: CompilerOptions = {}
) => {
    const compilerConfig: CompilerOptions = {
        preserveWhitespaces: false,
        ...compilerOptions,
    };

    const configuredTestBed = TestBed.configureCompiler(compilerConfig);

    configure(configuredTestBed);

    return configuredTestBed.compileComponents().then(() => configuredTestBed);
};

export function createComponent<TComponent>(
    type: Type<TComponent>,
    options: TestModuleMetadata) {
    let component: TComponent;
    let fixture: ComponentFixture<TComponent>;

    const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule(options).compileComponents();
    };

    return configureTests(configure).then(testBed => {
        fixture = testBed.createComponent(type);
        component = fixture.componentInstance;
        return { component, fixture };
    });
}
