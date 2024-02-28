import { Component, Input, computed, signal } from '@angular/core'
import { hlm } from '@spartan-ng/ui-core'
import { ClassValue } from 'clsx'

@Component({
    selector: 'hlm-dialog-header',
    standalone: true,
    template: ` <ng-content /> `,
    host: {
        '[class]': '_computedClass()',
    },
})
export class HlmDialogHeaderComponent {
    private readonly _userCls = signal<ClassValue>('')
    @Input()
    set class(userCls: ClassValue) {
        this._userCls.set(userCls)
    }

    protected _computedClass = computed(() => this._generateClass())
    private _generateClass() {
        return hlm(
            'flex flex-col space-y-1.5 text-center sm:text-left',
            this._userCls(),
        )
    }
}
