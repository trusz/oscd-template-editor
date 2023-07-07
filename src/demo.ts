import { customElement, property, LitElement, html } from 'lit-element'
import "@openscd/open-scd-core/open-scd.js"
import { PluginSet } from '@openscd/open-scd-core/open-scd.js'
// import { Templates } from "../lib/template-editor"

/**
* An example element.
*
* @slot - This element has a slot
* @csspart button - The button
*/
@customElement('openscd-demo')
export class Demo extends LitElement {
    /**
    * Copy for the read the docs hint.
    */
    @property()
    docsHint = 'Click on the Vite and Lit logos to learn more'
    
    /**
    * The number of times the button has been clicked.
    */
    @property({ type: Number })
    count = 0

    plugins: Partial<PluginSet> = {
        "menu": [
            {"name": "Open File", "translations": {"de": "Datei öffnen"}, "icon": "folder_open", "active": true, "src": "https://openscd.github.io/oscd-open/oscd-open.js"},
            {"name": "Save File", "translations": {"de": "Datei Speichern"}, "icon": "save", "active": true, "src": "https://openscd.github.io/oscd-save/oscd-save.js"},
        ],
        "editor": [
            {"name": "Communication Explorer", "translations": {"de": "Kommunikation Explorer"}, "icon": "save", "active": true, "src": "https://sprinteins.github.io/oscd-plugins/communication-explorer/index.js", requireDoc: true},
            {"name": "Template Editor", "icon": "save", "active": true, "src": "http://localhost:65531/oscd-template-editor.js", requireDoc: true},
        ]
    }
    
    render() {
        return html`
        <open-scd
              .plugins=${this.plugins}>
        </open-scd>
        `
    }
    
    
}

declare global {
    interface HTMLElementTagNameMap {
        'openscd-demo': Demo
    }
}
