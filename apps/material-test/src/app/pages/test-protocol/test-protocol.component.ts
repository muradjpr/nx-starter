import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InfoTreeComponent } from '../../main/headers/info-tree/info-tree.component'
import { HeaderInternalComponent } from '../../main/headers/header-internal/header-internal.component'
import { ButtonGroupComponent } from '../../main/headers/button-group/button-group.component'
import { MaterialModules } from '@my-nx-starter/material-modules'

@Component({
    selector: 'jsat-test-protocol',
    standalone: true,
    templateUrl: './test-protocol.component.html',
    styleUrl: './test-protocol.component.scss',
    imports: [
        CommonModule,
        ...MaterialModules,
        InfoTreeComponent,
        HeaderInternalComponent,
        ButtonGroupComponent,
    ],
})
export class TestProtocolComponent {
    columnNamesMap = {
        step: 'Step',
        description: 'Description',
        expectedResult: 'Expected Result',
        resultConfig: 'Result Config',
        requirementLink: 'Requirement Link',
    }
    displayedColumns = [
        'step',
        'description',
        'expectedResult',
        'resultConfig',
        'requirementLink',
    ]
    dataSource = [
        {
            step: 1,
            description: '',
            expectedResult: '',
            resultConfig: '',
            requirementLink: ['Req 101', 'Req 102'],
        },
        {
            step: 2,
            description: '',
            expectedResult: '',
            resultConfig: '',
            requirementLink: ['Req 101', 'Req 102'],
        },
        {
            step: 3,
            description: '',
            expectedResult: '',
            resultConfig: '',
            requirementLink: ['Req 101'],
        },
        {
            step: 4,
            description: '',
            expectedResult: '',
            resultConfig: '',
            requirementLink: ['Req 104'],
        },
    ]
}
