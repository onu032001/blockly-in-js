let currentStatus = 0;
function addScriptTag(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.append(script);
    script.onload = () => currentStatus += 1;
}
const checkIfTrue = (num, resolve) => {
    if (currentStatus == num) {resolve()} else {
        window.setTimeout(checkIfTrue, 0, num, resolve);
    };
};
addScriptTag('https://unpkg.com/blockly/blockly_compressed.js');
new Promise((resolve) => checkIfTrue(1, resolve)).then((result) => addScriptTag('https://unpkg.com/blockly/blocks_compressed.js'));
new Promise((resolve) => checkIfTrue(2, resolve)).then((result) => addScriptTag('https://unpkg.com/blockly/javascript_compressed.js'));
new Promise((resolve) => checkIfTrue(3, resolve)).then((result) => addScriptTag('https://unpkg.com/blockly/msg/ko.js'));
let blocklyDivs = [];
function addBlockly(id) {
    const blocklyDiv = document.createElement('div');
    blocklyDiv.id = id;
    blocklyDiv.setAttribute('style', 'width: 1000px; height: calc(1000px * (9 / 16));');
    document.body.append(blocklyDiv);
    const toolbox = {
        "kind": "categoryToolbox",
        "contents": [
            {
                "kind": "category",
                "categoryStyle": "logic_category",
                "name": "논리",
                "contents": [
                    {
                        "kind": "block",
                        "type": "logic_boolean"
                    },
                    {
                        "kind": "block",
                        "type": "controls_if"
                    },
                    {
                        "kind": "block",
                        "type": "logic_compare"
                    },
                    {
                        "kind": "block",
                        "type": "logic_operation"
                    },
                    {
                        "kind": "block",
                        "type": "logic_negate"
                    },
                    {
                        "kind": "block",
                        "type": "logic_null"
                    },
                    {
                        "kind": "block",
                        "type": "logic_ternary"
                    }
                ]
            },
            {
                "kind": "category",
                "categoryStyle": "loop_category",
                "name": "반복",
                "contents": [
                    {
                        "kind": "block",
                        "type": "controls_repeat_ext"
                    },
                    {
                        "kind": "block",
                        "type": "controls_whileUntil"
                    },
                    {
                        "kind": "block",
                        "type": "controls_for"
                    },
                    {
                        "kind": "block",
                        "type": "controls_forEach"
                    },
                    {
                        "kind": "block",
                        "type": "controls_flow_statements"
                    }
                ]
            },
            {
                "kind": "category",
                "categoryStyle": "math_category",
                "name": "연산",
                "contents": [
                    {
                        "kind": "block",
                        "type": "math_number"
                    },
                    {
                        "kind": "block",
                        "type": "math_arithmetic"
                    },
                    {
                        "kind": "block",
                        "type": "math_single"
                    },
                    {
                        "kind": "block",
                        "type": "math_trig"
                    },
                    {
                        "kind": "block",
                        "type": "math_constant"
                    },
                    {
                        "kind": "block",
                        "type": "math_number_property"
                    },
                    {
                        "kind": "block",
                        "type": "math_round"
                    },
                    {
                        "kind": "block",
                        "type": "math_on_list"
                    },
                    {
                        "kind": "block",
                        "type": "math_modulo"
                    },
                    {
                        "kind": "block",
                        "type": "math_constrain"
                    },
                    {
                        "kind": "block",
                        "type": "math_random_int"
                    },
                    {
                        "kind": "block",
                        "type": "math_random_float"
                    },
                    {
                        "kind": "block",
                        "type": "math_atan2"
                    }
                ]
            },
            {
                "kind": "category",
                "categoryStyle": "text_category",
                "name": "문자",
                "contents": [
                    {
                        "kind": "block",
                        "type": "text"
                    },
                    {
                        "kind": "block",
                        "type": "text_join"
                    },
                    {
                        "kind": "block",
                        "type": "text_append"
                    },
                    {
                        "kind": "block",
                        "type": "text_length"
                    },
                    {
                        "kind": "block",
                        "type": "text_isEmpty"
                    },
                    {
                        "kind": "block",
                        "type": "text_indexOf"
                    },
                    {
                        "kind": "block",
                        "type": "text_charAt"
                    },
                    {
                        "kind": "block",
                        "type": "text_getSubstring"
                    },
                    {
                        "kind": "block",
                        "type": "text_changeCase"
                    },
                    {
                        "kind": "block",
                        "type": "text_trim"
                    },
                    {
                        "kind": "block",
                        "type": "text_print"
                    },
                    {
                        "kind": "block",
                        "type": "text_prompt_ext"
                    },
                    {
                        "kind": "block",
                        "type": "text_count"
                    },
                    {
                        "kind": "block",
                        "type": "text_replace"
                    },
                    {
                        "kind": "block",
                        "type": "text_reverse"
                    }
                ]
            },
            {
                "kind": "category",
                "categoryStyle": "list_category",
                "name": "목록",
                "contents": [
                    {
                        "kind": "block",
                        "type": "lists_create_empty"
                    },
                    {
                        "kind": "block",
                        "type": "lists_repeat"
                    },
                    {
                        "kind": "block",
                        "type": "lists_reverse"
                    },
                    {
                        "kind": "block",
                        "type": "lists_isEmpty"
                    },
                    {
                        "kind": "block",
                        "type": "lists_length"
                    },
                    {
                        "kind": "block",
                        "type": "lists_create_with"
                    },
                    {
                        "kind": "block",
                        "type": "lists_indexOf"
                    },
                    {
                        "kind": "block",
                        "type": "lists_getIndex"
                    },
                    {
                        "kind": "block",
                        "type": "lists_setIndex"
                    },
                    {
                        "kind": "block",
                        "type": "lists_getSublist"
                    },
                    {
                        "kind": "block",
                        "type": "lists_sort"
                    },
                    {
                        "kind": "block",
                        "type": "lists_split"
                    }
                ]
            },
            {
                "kind": "category",
                "categoryStyle": "variable_category",
                "name": "변수",
                "custom": "VARIABLE"
            },
            {
                "kind": "category",
                "categoryStyle": "procedure_category",
                "name": "함수",
                "custom": "PROCEDURE"
            }
        ]
    };
    const theme = Blockly.Theme.defineTheme('mainTheme', {
        'base': Blockly.Themes.Classic,
    });
    const workspace = Blockly.inject(id, {
        toolbox,
        theme: 'mainTheme'
    });
    blocklyDivs.push({blocklyDiv, toolbox, theme, workspace});
}
new Promise((resolve) => checkIfTrue(4, resolve)).then((result) => console.log('완료'));
'완료';
