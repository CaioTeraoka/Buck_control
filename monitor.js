[
    {
        "id": "b77328a70ae43e92",
        "type": "tab",
        "label": "Fluxo 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "fd7ba98a334942ee",
        "type": "ui_chartst",
        "z": "b77328a70ae43e92",
        "group": "f9c34dde.1e2f4",
        "name": "Voltages",
        "order": 1,
        "width": 0,
        "height": 0,
        "chartType": "line",
        "curveType": "linear",
        "duration": "10",
        "ymin": "",
        "ymax": "",
        "x": 840,
        "y": 400,
        "wires": []
    },
    {
        "id": "58574b4c9d80ca72",
        "type": "acquisition out",
        "z": "b77328a70ae43e92",
        "name": "St-link_out",
        "probeconfig": "95a6ef037ae809e2",
        "x": 630,
        "y": 280,
        "wires": []
    },
    {
        "id": "61606035aa8d9fe7",
        "type": "acquisition in",
        "z": "b77328a70ae43e92",
        "name": "St-link_In",
        "probeconfig": "bed83272c9eb550e",
        "x": 280,
        "y": 400,
        "wires": [
            [
                "e5e8b7741cba1232"
            ],
            []
        ]
    },
    {
        "id": "dd254cdded48c979",
        "type": "variables",
        "z": "b77328a70ae43e92",
        "groupname": "Voltage",
        "accesspoint": 0,
        "execonfig": "d355e2dbb5bc0584",
        "variablelist": [],
        "triggerstartmode": "manual",
        "triggername": "Buck.setPoint",
        "triggerthreshold": "30000",
        "frequency": "",
        "frequencyType": "0",
        "snapshotheader": "",
        "mode": "direct",
        "lastImportedTime": 1758674180346,
        "openStatus": true,
        "x": 320,
        "y": 280,
        "wires": [
            [
                "58574b4c9d80ca72"
            ],
            []
        ],
        "info": "Bloco usado para obter os valores de tensão:\r\n- globalData.halfBridgeVoltage\r\n- globalData.inputVoltage\r\n- globalData.outputVoltage"
    },
    {
        "id": "e5e8b7741cba1232",
        "type": "processing",
        "z": "b77328a70ae43e92",
        "groupname": "Voltage",
        "groupid": "0f00b03f30872c78",
        "expressions": [],
        "statistics": [],
        "logmode": "no",
        "logformat": "stcm",
        "x": 520,
        "y": 400,
        "wires": [
            [
                "fd7ba98a334942ee"
            ],
            []
        ]
    },
    {
        "id": "1f583049366daebb",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Start_in",
        "links": [
            "dcdfde1a658d8d43"
        ],
        "x": 55,
        "y": 260,
        "wires": [
            [
                "dd254cdded48c979"
            ]
        ]
    },
    {
        "id": "35288fd867e01ea1",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Stop_in",
        "links": [
            "c577fc41904e334c"
        ],
        "x": 55,
        "y": 320,
        "wires": [
            [
                "dd254cdded48c979"
            ]
        ]
    },
    {
        "id": "8c7fdda1400848ad",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Kd",
        "links": [
            "16c596c9e1d8b0ba"
        ],
        "x": 465,
        "y": 100,
        "wires": [
            [
                "58574b4c9d80ca72"
            ]
        ]
    },
    {
        "id": "6f03d6aef7837a4f",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Kp",
        "links": [
            "e9d4e0be3eac5234"
        ],
        "x": 465,
        "y": 140,
        "wires": [
            [
                "58574b4c9d80ca72"
            ]
        ]
    },
    {
        "id": "92e18d83557ddae7",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "SetPoint",
        "links": [
            "c5b93b07d6e57250"
        ],
        "x": 465,
        "y": 180,
        "wires": [
            [
                "58574b4c9d80ca72"
            ]
        ]
    },
    {
        "id": "e83acb20dca38899",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Clear",
        "links": [
            "b1ecddcece481370"
        ],
        "x": 705,
        "y": 440,
        "wires": [
            [
                "fd7ba98a334942ee"
            ]
        ]
    },
    {
        "id": "f9bc1dc828c1fa93",
        "type": "comment",
        "z": "b77328a70ae43e92",
        "name": "",
        "info": "Configurar os nós:\nVoltage e St-link_out\n\nOlhar a descrição do nó",
        "x": 360,
        "y": 220,
        "wires": []
    },
    {
        "id": "179370bafec664c9",
        "type": "ui_slider",
        "z": "b77328a70ae43e92",
        "name": "",
        "label": "Setpoint",
        "tooltip": "",
        "group": "2e356a733a6d26e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "topic",
        "topicType": "msg",
        "min": 0,
        "max": "35",
        "step": 1,
        "className": "",
        "x": 240,
        "y": 1420,
        "wires": [
            [
                "c2d04932c88af2de",
                "c6b577230f2382ae"
            ]
        ]
    },
    {
        "id": "a9eb92947c311d12",
        "type": "change",
        "z": "b77328a70ae43e92",
        "name": "set.topic",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "write",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 1420,
        "wires": [
            [
                "c5b93b07d6e57250"
            ]
        ]
    },
    {
        "id": "158793627d562123",
        "type": "inject",
        "z": "b77328a70ae43e92",
        "name": "initialize",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "value",
        "payload": "20",
        "payloadType": "str",
        "x": 100,
        "y": 1420,
        "wires": [
            [
                "179370bafec664c9"
            ]
        ]
    },
    {
        "id": "c5b93b07d6e57250",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "set_setpoint",
        "mode": "link",
        "links": [
            "28feee5c30d904ca",
            "92e18d83557ddae7"
        ],
        "x": 935,
        "y": 1420,
        "wires": []
    },
    {
        "id": "c2d04932c88af2de",
        "type": "ui_text",
        "z": "b77328a70ae43e92",
        "group": "2e356a733a6d26e8",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Setpoint Value",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 500,
        "y": 1480,
        "wires": []
    },
    {
        "id": "6e63a8fddc89c6c2",
        "type": "template",
        "z": "b77328a70ae43e92",
        "name": "write_msg",
        "field": "payload",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"variablelist\":[\n        {\n            \"address\": \"{{payload.addr}}\",\n            \"type\": 9,\n            \"value\": \"{{payload.value}}\"\n        }\n    ],\n    \"acesspoint\":0\n}",
        "output": "json",
        "x": 630,
        "y": 1420,
        "wires": [
            [
                "a9eb92947c311d12"
            ]
        ]
    },
    {
        "id": "c97f0da85072603a",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Setpoint",
        "links": [
            "ec10f022a70d95ee"
        ],
        "x": 335,
        "y": 1360,
        "wires": [
            [
                "c6b577230f2382ae"
            ]
        ]
    },
    {
        "id": "c6b577230f2382ae",
        "type": "join",
        "z": "b77328a70ae43e92",
        "name": "teste",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "useparts": false,
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 440,
        "y": 1420,
        "wires": [
            [
                "6e63a8fddc89c6c2"
            ]
        ]
    },
    {
        "id": "787f11ed7ad2c99c",
        "type": "ui_slider",
        "z": "b77328a70ae43e92",
        "name": "",
        "label": "Kp",
        "tooltip": "",
        "group": "2e356a733a6d26e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "topic",
        "topicType": "msg",
        "min": 0,
        "max": "35",
        "step": 1,
        "className": "",
        "x": 230,
        "y": 1640,
        "wires": [
            [
                "3a19a3f781467fd2",
                "78f344997ea247d9"
            ]
        ]
    },
    {
        "id": "f2c8a3d091eb54ff",
        "type": "change",
        "z": "b77328a70ae43e92",
        "name": "set.topic",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "write",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 1640,
        "wires": [
            [
                "e9d4e0be3eac5234"
            ]
        ]
    },
    {
        "id": "6cbea6036fb03360",
        "type": "inject",
        "z": "b77328a70ae43e92",
        "name": "initialize",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "value",
        "payload": "20",
        "payloadType": "str",
        "x": 100,
        "y": 1640,
        "wires": [
            [
                "787f11ed7ad2c99c"
            ]
        ]
    },
    {
        "id": "e9d4e0be3eac5234",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "set_kp",
        "mode": "link",
        "links": [
            "6f03d6aef7837a4f"
        ],
        "x": 935,
        "y": 1640,
        "wires": []
    },
    {
        "id": "3a19a3f781467fd2",
        "type": "ui_text",
        "z": "b77328a70ae43e92",
        "group": "2e356a733a6d26e8",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Kp Value",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 480,
        "y": 1700,
        "wires": []
    },
    {
        "id": "b103549494df2bd2",
        "type": "template",
        "z": "b77328a70ae43e92",
        "name": "write_msg",
        "field": "payload",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"variablelist\":[\n        {\n            \"address\": \"{{payload.addr}}\",\n            \"type\": 9,\n            \"value\": \"{{payload.value}}\"\n        }\n    ],\n    \"acesspoint\":0\n}",
        "output": "json",
        "x": 630,
        "y": 1640,
        "wires": [
            [
                "f2c8a3d091eb54ff"
            ]
        ]
    },
    {
        "id": "d0a8791c89871fd5",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Kp",
        "links": [
            "7299af6d81d99adf"
        ],
        "x": 335,
        "y": 1580,
        "wires": [
            [
                "78f344997ea247d9"
            ]
        ]
    },
    {
        "id": "78f344997ea247d9",
        "type": "join",
        "z": "b77328a70ae43e92",
        "name": "teste",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "useparts": false,
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 440,
        "y": 1640,
        "wires": [
            [
                "b103549494df2bd2"
            ]
        ]
    },
    {
        "id": "41e56ef5af62d331",
        "type": "ui_slider",
        "z": "b77328a70ae43e92",
        "name": "",
        "label": "Ki",
        "tooltip": "",
        "group": "2e356a733a6d26e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "topic",
        "topicType": "msg",
        "min": 0,
        "max": "35",
        "step": 1,
        "className": "",
        "x": 230,
        "y": 1840,
        "wires": [
            [
                "fe9f1b79ca5bf473",
                "c3973be3e495bc7f"
            ]
        ]
    },
    {
        "id": "5cb04769944fc884",
        "type": "change",
        "z": "b77328a70ae43e92",
        "name": "set.topic",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "write",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 1840,
        "wires": [
            [
                "486f578f0d68d485"
            ]
        ]
    },
    {
        "id": "74401aefec152283",
        "type": "inject",
        "z": "b77328a70ae43e92",
        "name": "initialize",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "value",
        "payload": "20",
        "payloadType": "str",
        "x": 100,
        "y": 1840,
        "wires": [
            [
                "41e56ef5af62d331"
            ]
        ]
    },
    {
        "id": "486f578f0d68d485",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "set_ki",
        "mode": "link",
        "links": [
            "a5cfdb798b294974"
        ],
        "x": 935,
        "y": 1840,
        "wires": []
    },
    {
        "id": "fe9f1b79ca5bf473",
        "type": "ui_text",
        "z": "b77328a70ae43e92",
        "group": "2e356a733a6d26e8",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Ki Value",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 480,
        "y": 1900,
        "wires": []
    },
    {
        "id": "af45239040f49feb",
        "type": "template",
        "z": "b77328a70ae43e92",
        "name": "write_msg",
        "field": "payload",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"variablelist\":[\n        {\n            \"address\": \"{{payload.addr}}\",\n            \"type\": 9,\n            \"value\": \"{{payload.value}}\"\n        }\n    ],\n    \"acesspoint\":0\n}",
        "output": "json",
        "x": 630,
        "y": 1840,
        "wires": [
            [
                "5cb04769944fc884"
            ]
        ]
    },
    {
        "id": "b6c89582013259a8",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Ki",
        "links": [
            "f64f412e8fcff518"
        ],
        "x": 335,
        "y": 1780,
        "wires": [
            [
                "c3973be3e495bc7f"
            ]
        ]
    },
    {
        "id": "c3973be3e495bc7f",
        "type": "join",
        "z": "b77328a70ae43e92",
        "name": "teste",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "useparts": false,
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 440,
        "y": 1840,
        "wires": [
            [
                "af45239040f49feb"
            ]
        ]
    },
    {
        "id": "a0f94b33cbf2f9b9",
        "type": "ui_slider",
        "z": "b77328a70ae43e92",
        "name": "",
        "label": "Kd",
        "tooltip": "",
        "group": "2e356a733a6d26e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "topic",
        "topicType": "msg",
        "min": 0,
        "max": "35",
        "step": 1,
        "className": "",
        "x": 230,
        "y": 2040,
        "wires": [
            [
                "5a59d92eb0310632",
                "13700e46c67dd482"
            ]
        ]
    },
    {
        "id": "9e445170359e1740",
        "type": "change",
        "z": "b77328a70ae43e92",
        "name": "set.topic",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "write",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 2040,
        "wires": [
            [
                "16c596c9e1d8b0ba"
            ]
        ]
    },
    {
        "id": "255ac557818c4c0c",
        "type": "inject",
        "z": "b77328a70ae43e92",
        "name": "initialize",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "value",
        "payload": "20",
        "payloadType": "str",
        "x": 100,
        "y": 2040,
        "wires": [
            [
                "a0f94b33cbf2f9b9"
            ]
        ]
    },
    {
        "id": "16c596c9e1d8b0ba",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "SetPoint",
        "mode": "link",
        "links": [
            "8c7fdda1400848ad"
        ],
        "x": 935,
        "y": 2040,
        "wires": []
    },
    {
        "id": "5a59d92eb0310632",
        "type": "ui_text",
        "z": "b77328a70ae43e92",
        "group": "2e356a733a6d26e8",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Kd Value",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 480,
        "y": 2100,
        "wires": []
    },
    {
        "id": "805d42448b02bc40",
        "type": "template",
        "z": "b77328a70ae43e92",
        "name": "write_msg",
        "field": "payload",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"variablelist\":[\n        {\n            \"address\": \"{{payload.addr}}\",\n            \"type\": 9,\n            \"value\": \"{{payload.value}}\"\n        }\n    ],\n    \"acesspoint\":0\n}",
        "output": "json",
        "x": 630,
        "y": 2040,
        "wires": [
            [
                "9e445170359e1740"
            ]
        ]
    },
    {
        "id": "db4e590d6d6bbda7",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Kd",
        "links": [
            "a3b0c92d8a600b20"
        ],
        "x": 335,
        "y": 1980,
        "wires": [
            [
                "13700e46c67dd482"
            ]
        ]
    },
    {
        "id": "13700e46c67dd482",
        "type": "join",
        "z": "b77328a70ae43e92",
        "name": "teste",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "useparts": false,
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 440,
        "y": 2040,
        "wires": [
            [
                "805d42448b02bc40"
            ]
        ]
    },
    {
        "id": "acd869dd8d43291e",
        "type": "acquisition out",
        "z": "b77328a70ae43e92",
        "name": "St-link_out1",
        "probeconfig": "95a6ef037ae809e2",
        "x": 530,
        "y": 960,
        "wires": []
    },
    {
        "id": "32f08420e45927f0",
        "type": "variables",
        "z": "b77328a70ae43e92",
        "groupname": "Values",
        "accesspoint": 0,
        "execonfig": "aeecb6196bac04a9",
        "variablelist": [],
        "triggerstartmode": "manual",
        "triggername": "Buck.setPoint",
        "triggerthreshold": "30000",
        "frequency": "",
        "frequencyType": "0",
        "snapshotheader": "",
        "mode": "direct",
        "lastImportedTime": 1758674240869,
        "openStatus": true,
        "x": 330,
        "y": 780,
        "wires": [
            [
                "acd869dd8d43291e",
                "e364838204a6504f",
                "31c0cac1582970d6",
                "1d8f347ad407ddb7",
                "de2c20cced85d6c8"
            ],
            []
        ],
        "info": "Bloco usado para obter os valores dos estados:\r\n- globalData.command\r\n- globalData.currentState\r\n- globalData.errorStatus"
    },
    {
        "id": "70e8d8ddebb73e33",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Start_in1",
        "links": [
            "dcdfde1a658d8d43"
        ],
        "x": 75,
        "y": 760,
        "wires": [
            [
                "32f08420e45927f0"
            ]
        ]
    },
    {
        "id": "1c5287065e9c5e6d",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Stop_in1",
        "links": [
            "c577fc41904e334c"
        ],
        "x": 75,
        "y": 820,
        "wires": [
            [
                "32f08420e45927f0"
            ]
        ]
    },
    {
        "id": "e364838204a6504f",
        "type": "function",
        "z": "b77328a70ae43e92",
        "name": "Address Extract",
        "func": "var nome_variavel = \"pid.Kp\";\nvar variaveis = msg.payload.variablelist;\n\nfor (var i = 0; i < variaveis.length; i++) {\n    if (variaveis[i].name === nome_variavel) {\n        msg.payload = variaveis[i].address;\n        break;\n    }\n}\n\nvar jsn = {\n    \"topic\":\"addr\",\n    \"payload\": msg.payload\n}\nreturn jsn;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 720,
        "wires": [
            [
                "7299af6d81d99adf"
            ]
        ]
    },
    {
        "id": "7299af6d81d99adf",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Addr_Kp",
        "mode": "link",
        "links": [
            "d0a8791c89871fd5"
        ],
        "x": 685,
        "y": 720,
        "wires": []
    },
    {
        "id": "ec10f022a70d95ee",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Addr_setpoint",
        "mode": "link",
        "links": [
            "c97f0da85072603a"
        ],
        "x": 685,
        "y": 660,
        "wires": []
    },
    {
        "id": "31c0cac1582970d6",
        "type": "function",
        "z": "b77328a70ae43e92",
        "name": "Address Extract",
        "func": "var nome_variavel = \"Buck.setPoint\";\nvar variaveis = msg.payload.variablelist;\n\nfor (var i = 0; i < variaveis.length; i++) {\n    if (variaveis[i].name === nome_variavel) {\n        msg.payload = variaveis[i].address;\n        break;\n    }\n}\n\nvar jsn = {\n    \"topic\":\"addr\",\n    \"payload\": msg.payload\n}\nreturn jsn;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 660,
        "wires": [
            [
                "ec10f022a70d95ee"
            ]
        ]
    },
    {
        "id": "9b7e72f87e91eaf3",
        "type": "comment",
        "z": "b77328a70ae43e92",
        "name": "",
        "info": "Configurar os nós:\nStates e St-link_out1\n\nOlhar a descrição do nó",
        "x": 320,
        "y": 700,
        "wires": []
    },
    {
        "id": "fcebbdd9d5e0ba30",
        "type": "ui_button",
        "z": "b77328a70ae43e92",
        "name": "",
        "group": "2e356a733a6d26e8",
        "order": 3,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "Clear Graphs",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "clear",
        "topicType": "str",
        "x": 90,
        "y": 1080,
        "wires": [
            [
                "b1ecddcece481370"
            ]
        ]
    },
    {
        "id": "6a901a5263a2c83c",
        "type": "ui_button",
        "z": "b77328a70ae43e92",
        "name": "",
        "group": "2e356a733a6d26e8",
        "order": 1,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "START Acquisition",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "start",
        "topicType": "str",
        "x": 110,
        "y": 1140,
        "wires": [
            [
                "dcdfde1a658d8d43"
            ]
        ]
    },
    {
        "id": "7403b757b905600a",
        "type": "ui_button",
        "z": "b77328a70ae43e92",
        "name": "",
        "group": "2e356a733a6d26e8",
        "order": 2,
        "width": "5",
        "height": "1",
        "passthru": true,
        "label": "STOP Acquisition",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "stop",
        "topicType": "str",
        "x": 110,
        "y": 1220,
        "wires": [
            [
                "c577fc41904e334c"
            ]
        ]
    },
    {
        "id": "dcdfde1a658d8d43",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Start",
        "mode": "link",
        "links": [
            "1f583049366daebb",
            "70e8d8ddebb73e33"
        ],
        "x": 295,
        "y": 1140,
        "wires": []
    },
    {
        "id": "c577fc41904e334c",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Stop",
        "mode": "link",
        "links": [
            "1c5287065e9c5e6d",
            "35288fd867e01ea1"
        ],
        "x": 295,
        "y": 1220,
        "wires": []
    },
    {
        "id": "b1ecddcece481370",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Clear",
        "mode": "link",
        "links": [
            "e83acb20dca38899"
        ],
        "x": 295,
        "y": 1080,
        "wires": []
    },
    {
        "id": "1d8f347ad407ddb7",
        "type": "function",
        "z": "b77328a70ae43e92",
        "name": "Address Extract",
        "func": "var nome_variavel = \"pid.Ki\";\nvar variaveis = msg.payload.variablelist;\n\nfor (var i = 0; i < variaveis.length; i++) {\n    if (variaveis[i].name === nome_variavel) {\n        msg.payload = variaveis[i].address;\n        break;\n    }\n}\n\nvar jsn = {\n    \"topic\":\"addr\",\n    \"payload\": msg.payload\n}\nreturn jsn;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 780,
        "wires": [
            [
                "f64f412e8fcff518"
            ]
        ]
    },
    {
        "id": "f64f412e8fcff518",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Addr_Ki",
        "mode": "link",
        "links": [
            "b6c89582013259a8"
        ],
        "x": 685,
        "y": 780,
        "wires": []
    },
    {
        "id": "de2c20cced85d6c8",
        "type": "function",
        "z": "b77328a70ae43e92",
        "name": "Address Extract",
        "func": "var nome_variavel = \"pid.Kd\";\nvar variaveis = msg.payload.variablelist;\n\nfor (var i = 0; i < variaveis.length; i++) {\n    if (variaveis[i].name === nome_variavel) {\n        msg.payload = variaveis[i].address;\n        break;\n    }\n}\n\nvar jsn = {\n    \"topic\":\"addr\",\n    \"payload\": msg.payload\n}\nreturn jsn;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 840,
        "wires": [
            [
                "a3b0c92d8a600b20"
            ]
        ]
    },
    {
        "id": "a3b0c92d8a600b20",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Addr_Kd",
        "mode": "link",
        "links": [
            "db4e590d6d6bbda7"
        ],
        "x": 685,
        "y": 840,
        "wires": []
    },
    {
        "id": "a5cfdb798b294974",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Ki",
        "links": [
            "486f578f0d68d485"
        ],
        "x": 465,
        "y": 60,
        "wires": [
            [
                "58574b4c9d80ca72"
            ]
        ]
    },
    {
        "id": "f9c34dde.1e2f4",
        "type": "ui_group",
        "name": "Voltages",
        "tab": "17d09b07.741a55",
        "order": 2,
        "disp": true,
        "width": "10",
        "collapse": false,
        "className": ""
    },
    {
        "id": "95a6ef037ae809e2",
        "type": "probe",
        "probeid": "640017001500004C3359534E",
        "probename": "ST-Link v2 640017001500004C3359534E",
        "protocol": "SWD",
        "frequency": "1.8 MHz - Default",
        "probeproperty": "{\"SWD\":[\"4.6 MHz\",\"1.8 MHz - Default\",\"950 kHz\",\"400 kHz\",\"150 kHz\"],\"JTAG\":[\"18 MHz\",\"9 MHz\",\"4.5 MHz\",\"2.25 MHz\",\"1.12 MHz - Default\",\"560 kHz\",\"280 kHz\",\"140 kHz\"]}",
        "probeversion": "ST Link firmware version V2.J45",
        "connectionType": "p2p",
        "nickname": "St-link-Caio"
    },
    {
        "id": "bed83272c9eb550e",
        "type": "probe",
        "probeid": "640017001500004C3359534E",
        "probename": "ST-Link v2 640017001500004C3359534E",
        "protocol": "SWD",
        "frequency": "1.8 MHz - Default",
        "probeproperty": "{\"SWD\":[\"4.6 MHz\",\"1.8 MHz - Default\",\"950 kHz\",\"400 kHz\",\"150 kHz\"],\"JTAG\":[\"18 MHz\",\"9 MHz\",\"4.5 MHz\",\"2.25 MHz\",\"1.12 MHz - Default\",\"560 kHz\",\"280 kHz\",\"140 kHz\"]}",
        "probeversion": "ST Link firmware version V2.J45",
        "connectionType": "p2p",
        "nickname": "St-link"
    },
    {
        "id": "d355e2dbb5bc0584",
        "type": "exe-config",
        "name": "Buck_control",
        "exefile": "C:\\Users\\caiom\\STM32CubeIDE\\workspace_2\\Buck_control\\Debug\\Buck_control.elf",
        "exefolder": "C:\\Users\\caiom\\STM32CubeIDE\\workspace_2\\Buck_control\\Debug",
        "exevariablelist": [
            {
                "address": "0x08004fbc",
                "name": "AHBPrescTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fc6",
                "name": "AHBPrescTable[10]",
                "type": 1
            },
            {
                "address": "0x08004fc7",
                "name": "AHBPrescTable[11]",
                "type": 1
            },
            {
                "address": "0x08004fc8",
                "name": "AHBPrescTable[12]",
                "type": 1
            },
            {
                "address": "0x08004fc9",
                "name": "AHBPrescTable[13]",
                "type": 1
            },
            {
                "address": "0x08004fca",
                "name": "AHBPrescTable[14]",
                "type": 1
            },
            {
                "address": "0x08004fcb",
                "name": "AHBPrescTable[15]",
                "type": 1
            },
            {
                "address": "0x08004fbd",
                "name": "AHBPrescTable[1]",
                "type": 1
            },
            {
                "address": "0x08004fbe",
                "name": "AHBPrescTable[2]",
                "type": 1
            },
            {
                "address": "0x08004fbf",
                "name": "AHBPrescTable[3]",
                "type": 1
            },
            {
                "address": "0x08004fc0",
                "name": "AHBPrescTable[4]",
                "type": 1
            },
            {
                "address": "0x08004fc1",
                "name": "AHBPrescTable[5]",
                "type": 1
            },
            {
                "address": "0x08004fc2",
                "name": "AHBPrescTable[6]",
                "type": 1
            },
            {
                "address": "0x08004fc3",
                "name": "AHBPrescTable[7]",
                "type": 1
            },
            {
                "address": "0x08004fc4",
                "name": "AHBPrescTable[8]",
                "type": 1
            },
            {
                "address": "0x08004fc5",
                "name": "AHBPrescTable[9]",
                "type": 1
            },
            {
                "address": "0x08004fcc",
                "name": "aPLLMULFactorTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fd6",
                "name": "aPLLMULFactorTable[10]",
                "type": 1
            },
            {
                "address": "0x08004fd7",
                "name": "aPLLMULFactorTable[11]",
                "type": 1
            },
            {
                "address": "0x08004fd8",
                "name": "aPLLMULFactorTable[12]",
                "type": 1
            },
            {
                "address": "0x08004fd9",
                "name": "aPLLMULFactorTable[13]",
                "type": 1
            },
            {
                "address": "0x08004fda",
                "name": "aPLLMULFactorTable[14]",
                "type": 1
            },
            {
                "address": "0x08004fdb",
                "name": "aPLLMULFactorTable[15]",
                "type": 1
            },
            {
                "address": "0x08004fcd",
                "name": "aPLLMULFactorTable[1]",
                "type": 1
            },
            {
                "address": "0x08004fce",
                "name": "aPLLMULFactorTable[2]",
                "type": 1
            },
            {
                "address": "0x08004fcf",
                "name": "aPLLMULFactorTable[3]",
                "type": 1
            },
            {
                "address": "0x08004fd0",
                "name": "aPLLMULFactorTable[4]",
                "type": 1
            },
            {
                "address": "0x08004fd1",
                "name": "aPLLMULFactorTable[5]",
                "type": 1
            },
            {
                "address": "0x08004fd2",
                "name": "aPLLMULFactorTable[6]",
                "type": 1
            },
            {
                "address": "0x08004fd3",
                "name": "aPLLMULFactorTable[7]",
                "type": 1
            },
            {
                "address": "0x08004fd4",
                "name": "aPLLMULFactorTable[8]",
                "type": 1
            },
            {
                "address": "0x08004fd5",
                "name": "aPLLMULFactorTable[9]",
                "type": 1
            },
            {
                "address": "0x08004fdc",
                "name": "aPredivFactorTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fe6",
                "name": "aPredivFactorTable[10]",
                "type": 1
            },
            {
                "address": "0x08004fe7",
                "name": "aPredivFactorTable[11]",
                "type": 1
            },
            {
                "address": "0x08004fe8",
                "name": "aPredivFactorTable[12]",
                "type": 1
            },
            {
                "address": "0x08004fe9",
                "name": "aPredivFactorTable[13]",
                "type": 1
            },
            {
                "address": "0x08004fea",
                "name": "aPredivFactorTable[14]",
                "type": 1
            },
            {
                "address": "0x08004feb",
                "name": "aPredivFactorTable[15]",
                "type": 1
            },
            {
                "address": "0x08004fdd",
                "name": "aPredivFactorTable[1]",
                "type": 1
            },
            {
                "address": "0x08004fde",
                "name": "aPredivFactorTable[2]",
                "type": 1
            },
            {
                "address": "0x08004fdf",
                "name": "aPredivFactorTable[3]",
                "type": 1
            },
            {
                "address": "0x08004fe0",
                "name": "aPredivFactorTable[4]",
                "type": 1
            },
            {
                "address": "0x08004fe1",
                "name": "aPredivFactorTable[5]",
                "type": 1
            },
            {
                "address": "0x08004fe2",
                "name": "aPredivFactorTable[6]",
                "type": 1
            },
            {
                "address": "0x08004fe3",
                "name": "aPredivFactorTable[7]",
                "type": 1
            },
            {
                "address": "0x08004fe4",
                "name": "aPredivFactorTable[8]",
                "type": 1
            },
            {
                "address": "0x08004fe5",
                "name": "aPredivFactorTable[9]",
                "type": 1
            },
            {
                "address": "0x20000148",
                "name": "Buck.setPoint",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000140",
                "name": "Buck.Vin",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000144",
                "name": "Buck.Vout",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000154",
                "name": "dutyCycle",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000060",
                "name": "hadc1.DMA_Handle",
                "type": 5
            },
            {
                "address": "0x2000006c",
                "name": "hadc1.ErrorCode",
                "type": 5
            },
            {
                "address": "0x2000002c",
                "name": "hadc1.Init.ClockPrescaler",
                "type": 5
            },
            {
                "address": "0x20000041",
                "name": "hadc1.Init.ContinuousConvMode",
                "type": 2
            },
            {
                "address": "0x20000034",
                "name": "hadc1.Init.DataAlign",
                "type": 5
            },
            {
                "address": "0x20000048",
                "name": "hadc1.Init.DiscontinuousConvMode",
                "type": 2
            },
            {
                "address": "0x20000058",
                "name": "hadc1.Init.DMAContinuousRequests",
                "type": 2
            },
            {
                "address": "0x2000003c",
                "name": "hadc1.Init.EOCSelection",
                "type": 5
            },
            {
                "address": "0x20000050",
                "name": "hadc1.Init.ExternalTrigConv",
                "type": 5
            },
            {
                "address": "0x20000054",
                "name": "hadc1.Init.ExternalTrigConvEdge",
                "type": 5
            },
            {
                "address": "0x20000040",
                "name": "hadc1.Init.LowPowerAutoWait",
                "type": 2
            },
            {
                "address": "0x20000044",
                "name": "hadc1.Init.NbrOfConversion",
                "type": 5
            },
            {
                "address": "0x2000004c",
                "name": "hadc1.Init.NbrOfDiscConversion",
                "type": 5
            },
            {
                "address": "0x2000005c",
                "name": "hadc1.Init.Overrun",
                "type": 5
            },
            {
                "address": "0x20000030",
                "name": "hadc1.Init.Resolution",
                "type": 5
            },
            {
                "address": "0x20000038",
                "name": "hadc1.Init.ScanConvMode",
                "type": 5
            },
            {
                "address": "0x20000074",
                "name": "hadc1.InjectionConfig.ChannelCount",
                "type": 5
            },
            {
                "address": "0x20000070",
                "name": "hadc1.InjectionConfig.ContextQueue",
                "type": 5
            },
            {
                "address": "0x20000028",
                "name": "hadc1.Instance",
                "type": 5
            },
            {
                "address": "0x20000064",
                "name": "hadc1.Lock",
                "type": 2
            },
            {
                "address": "0x20000068",
                "name": "hadc1.State",
                "type": 5
            },
            {
                "address": "0x200000b8",
                "name": "hdma_adc1.ChannelIndex",
                "type": 5
            },
            {
                "address": "0x200000b4",
                "name": "hdma_adc1.DmaBaseAddress",
                "type": 5
            },
            {
                "address": "0x200000b0",
                "name": "hdma_adc1.ErrorCode",
                "type": 5
            },
            {
                "address": "0x2000007c",
                "name": "hdma_adc1.Init.Direction",
                "type": 5
            },
            {
                "address": "0x2000008c",
                "name": "hdma_adc1.Init.MemDataAlignment",
                "type": 5
            },
            {
                "address": "0x20000084",
                "name": "hdma_adc1.Init.MemInc",
                "type": 5
            },
            {
                "address": "0x20000090",
                "name": "hdma_adc1.Init.Mode",
                "type": 5
            },
            {
                "address": "0x20000088",
                "name": "hdma_adc1.Init.PeriphDataAlignment",
                "type": 5
            },
            {
                "address": "0x20000080",
                "name": "hdma_adc1.Init.PeriphInc",
                "type": 5
            },
            {
                "address": "0x20000094",
                "name": "hdma_adc1.Init.Priority",
                "type": 5
            },
            {
                "address": "0x20000078",
                "name": "hdma_adc1.Instance",
                "type": 5
            },
            {
                "address": "0x20000098",
                "name": "hdma_adc1.Lock",
                "type": 2
            },
            {
                "address": "0x2000009c",
                "name": "hdma_adc1.Parent",
                "type": 5
            },
            {
                "address": "0x20000099",
                "name": "hdma_adc1.State",
                "type": 2
            },
            {
                "address": "0x200000ac",
                "name": "hdma_adc1.XferAbortCallback",
                "type": 5
            },
            {
                "address": "0x200000a0",
                "name": "hdma_adc1.XferCpltCallback",
                "type": 5
            },
            {
                "address": "0x200000a8",
                "name": "hdma_adc1.XferErrorCallback",
                "type": 5
            },
            {
                "address": "0x200000a4",
                "name": "hdma_adc1.XferHalfCpltCallback",
                "type": 5
            },
            {
                "address": "0x200000d8",
                "name": "htim3.Channel",
                "type": 2
            },
            {
                "address": "0x20000100",
                "name": "htim3.ChannelNState[0]",
                "type": 2
            },
            {
                "address": "0x20000101",
                "name": "htim3.ChannelNState[1]",
                "type": 2
            },
            {
                "address": "0x20000102",
                "name": "htim3.ChannelNState[2]",
                "type": 2
            },
            {
                "address": "0x20000103",
                "name": "htim3.ChannelNState[3]",
                "type": 2
            },
            {
                "address": "0x200000fa",
                "name": "htim3.ChannelState[0]",
                "type": 2
            },
            {
                "address": "0x200000fb",
                "name": "htim3.ChannelState[1]",
                "type": 2
            },
            {
                "address": "0x200000fc",
                "name": "htim3.ChannelState[2]",
                "type": 2
            },
            {
                "address": "0x200000fd",
                "name": "htim3.ChannelState[3]",
                "type": 2
            },
            {
                "address": "0x200000fe",
                "name": "htim3.ChannelState[4]",
                "type": 2
            },
            {
                "address": "0x200000ff",
                "name": "htim3.ChannelState[5]",
                "type": 2
            },
            {
                "address": "0x20000104",
                "name": "htim3.DMABurstState",
                "type": 2
            },
            {
                "address": "0x200000dc",
                "name": "htim3.hdma[0]",
                "type": 5
            },
            {
                "address": "0x200000e0",
                "name": "htim3.hdma[1]",
                "type": 5
            },
            {
                "address": "0x200000e4",
                "name": "htim3.hdma[2]",
                "type": 5
            },
            {
                "address": "0x200000e8",
                "name": "htim3.hdma[3]",
                "type": 5
            },
            {
                "address": "0x200000ec",
                "name": "htim3.hdma[4]",
                "type": 5
            },
            {
                "address": "0x200000f0",
                "name": "htim3.hdma[5]",
                "type": 5
            },
            {
                "address": "0x200000f4",
                "name": "htim3.hdma[6]",
                "type": 5
            },
            {
                "address": "0x200000d4",
                "name": "htim3.Init.AutoReloadPreload",
                "type": 5
            },
            {
                "address": "0x200000cc",
                "name": "htim3.Init.ClockDivision",
                "type": 5
            },
            {
                "address": "0x200000c4",
                "name": "htim3.Init.CounterMode",
                "type": 5
            },
            {
                "address": "0x200000c8",
                "name": "htim3.Init.Period",
                "type": 5
            },
            {
                "address": "0x200000c0",
                "name": "htim3.Init.Prescaler",
                "type": 5
            },
            {
                "address": "0x200000d0",
                "name": "htim3.Init.RepetitionCounter",
                "type": 5
            },
            {
                "address": "0x200000bc",
                "name": "htim3.Instance",
                "type": 5
            },
            {
                "address": "0x200000f8",
                "name": "htim3.Lock",
                "type": 2
            },
            {
                "address": "0x200000f9",
                "name": "htim3.State",
                "type": 2
            },
            {
                "address": "0x2000014c",
                "name": "internalAdcRawData[0]",
                "type": 3
            },
            {
                "address": "0x2000014e",
                "name": "internalAdcRawData[1]",
                "type": 3
            },
            {
                "address": "0x20000150",
                "name": "internalAdcRawData[2]",
                "type": 3
            },
            {
                "address": "0x20000152",
                "name": "internalAdcRawData[3]",
                "type": 3
            },
            {
                "address": "0x2000013c",
                "name": "pid.command_prev",
                "type": 9
            },
            {
                "address": "0x20000138",
                "name": "pid.command_sat_prev",
                "type": 9
            },
            {
                "address": "0x20000134",
                "name": "pid.deriv_prev",
                "type": 9
            },
            {
                "address": "0x20000130",
                "name": "pid.err_prev",
                "type": 9
            },
            {
                "address": "0x2000012c",
                "name": "pid.integral",
                "type": 9
            },
            {
                "address": "0x20000114",
                "name": "pid.Kaw",
                "type": 9
            },
            {
                "address": "0x20000110",
                "name": "pid.Kd",
                "type": 9
            },
            {
                "address": "0x2000010c",
                "name": "pid.Ki",
                "type": 9
            },
            {
                "address": "0x20000108",
                "name": "pid.Kp",
                "type": 9
            },
            {
                "address": "0x20000120",
                "name": "pid.max",
                "type": 9
            },
            {
                "address": "0x20000128",
                "name": "pid.max_rate",
                "type": 9
            },
            {
                "address": "0x20000124",
                "name": "pid.min",
                "type": 9
            },
            {
                "address": "0x2000011c",
                "name": "pid.T",
                "type": 9
            },
            {
                "address": "0x20000118",
                "name": "pid.T_C",
                "type": 9
            },
            {
                "address": "0x20000000",
                "name": "SystemCoreClock",
                "type": 5
            },
            {
                "address": "0x20000158",
                "name": "uwTick",
                "type": 5
            },
            {
                "address": "0x20000008",
                "name": "uwTickFreq",
                "type": 2
            },
            {
                "address": "0x20000004",
                "name": "uwTickPrio",
                "type": 5
            }
        ],
        "expand": true,
        "filename": "Buck_control.elf",
        "exeModifiedTime": 1758673114166,
        "configLastUpdate": 1758674180018
    },
    {
        "id": "2e356a733a6d26e8",
        "type": "ui_group",
        "name": "Buttons",
        "tab": "17d09b07.741a55",
        "order": 1,
        "disp": true,
        "width": 10,
        "collapse": false,
        "className": ""
    },
    {
        "id": "aeecb6196bac04a9",
        "type": "exe-config",
        "name": "Buck_values",
        "exefile": "C:\\Users\\caiom\\STM32CubeIDE\\workspace_2\\Buck_control\\Debug\\Buck_control.elf",
        "exefolder": "C:\\Users\\caiom\\STM32CubeIDE\\workspace_2\\Buck_control\\Debug",
        "exevariablelist": [
            {
                "address": "0x08004fbc",
                "name": "AHBPrescTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fcc",
                "name": "aPLLMULFactorTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fdc",
                "name": "aPredivFactorTable[0]",
                "type": 1
            },
            {
                "address": "0x20000148",
                "name": "Buck.setPoint",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000140",
                "name": "Buck.Vin",
                "type": 9
            },
            {
                "address": "0x20000144",
                "name": "Buck.Vout",
                "type": 9
            },
            {
                "address": "0x20000154",
                "name": "dutyCycle",
                "type": 9
            },
            {
                "address": "0x20000060",
                "name": "hadc1.DMA_Handle",
                "type": 5
            },
            {
                "address": "0x2000006c",
                "name": "hadc1.ErrorCode",
                "type": 5
            },
            {
                "address": "0x2000002c",
                "name": "hadc1.Init.ClockPrescaler",
                "type": 5
            },
            {
                "address": "0x20000041",
                "name": "hadc1.Init.ContinuousConvMode",
                "type": 2
            },
            {
                "address": "0x20000034",
                "name": "hadc1.Init.DataAlign",
                "type": 5
            },
            {
                "address": "0x20000048",
                "name": "hadc1.Init.DiscontinuousConvMode",
                "type": 2
            },
            {
                "address": "0x20000058",
                "name": "hadc1.Init.DMAContinuousRequests",
                "type": 2
            },
            {
                "address": "0x2000003c",
                "name": "hadc1.Init.EOCSelection",
                "type": 5
            },
            {
                "address": "0x20000050",
                "name": "hadc1.Init.ExternalTrigConv",
                "type": 5
            },
            {
                "address": "0x20000054",
                "name": "hadc1.Init.ExternalTrigConvEdge",
                "type": 5
            },
            {
                "address": "0x20000040",
                "name": "hadc1.Init.LowPowerAutoWait",
                "type": 2
            },
            {
                "address": "0x20000044",
                "name": "hadc1.Init.NbrOfConversion",
                "type": 5
            },
            {
                "address": "0x2000004c",
                "name": "hadc1.Init.NbrOfDiscConversion",
                "type": 5
            },
            {
                "address": "0x2000005c",
                "name": "hadc1.Init.Overrun",
                "type": 5
            },
            {
                "address": "0x20000030",
                "name": "hadc1.Init.Resolution",
                "type": 5
            },
            {
                "address": "0x20000038",
                "name": "hadc1.Init.ScanConvMode",
                "type": 5
            },
            {
                "address": "0x20000074",
                "name": "hadc1.InjectionConfig.ChannelCount",
                "type": 5
            },
            {
                "address": "0x20000070",
                "name": "hadc1.InjectionConfig.ContextQueue",
                "type": 5
            },
            {
                "address": "0x20000028",
                "name": "hadc1.Instance",
                "type": 5
            },
            {
                "address": "0x20000064",
                "name": "hadc1.Lock",
                "type": 2
            },
            {
                "address": "0x20000068",
                "name": "hadc1.State",
                "type": 5
            },
            {
                "address": "0x200000b8",
                "name": "hdma_adc1.ChannelIndex",
                "type": 5
            },
            {
                "address": "0x200000b4",
                "name": "hdma_adc1.DmaBaseAddress",
                "type": 5
            },
            {
                "address": "0x200000b0",
                "name": "hdma_adc1.ErrorCode",
                "type": 5
            },
            {
                "address": "0x2000007c",
                "name": "hdma_adc1.Init.Direction",
                "type": 5
            },
            {
                "address": "0x2000008c",
                "name": "hdma_adc1.Init.MemDataAlignment",
                "type": 5
            },
            {
                "address": "0x20000084",
                "name": "hdma_adc1.Init.MemInc",
                "type": 5
            },
            {
                "address": "0x20000090",
                "name": "hdma_adc1.Init.Mode",
                "type": 5
            },
            {
                "address": "0x20000088",
                "name": "hdma_adc1.Init.PeriphDataAlignment",
                "type": 5
            },
            {
                "address": "0x20000080",
                "name": "hdma_adc1.Init.PeriphInc",
                "type": 5
            },
            {
                "address": "0x20000094",
                "name": "hdma_adc1.Init.Priority",
                "type": 5
            },
            {
                "address": "0x20000078",
                "name": "hdma_adc1.Instance",
                "type": 5
            },
            {
                "address": "0x20000098",
                "name": "hdma_adc1.Lock",
                "type": 2
            },
            {
                "address": "0x2000009c",
                "name": "hdma_adc1.Parent",
                "type": 5
            },
            {
                "address": "0x20000099",
                "name": "hdma_adc1.State",
                "type": 2
            },
            {
                "address": "0x200000ac",
                "name": "hdma_adc1.XferAbortCallback",
                "type": 5
            },
            {
                "address": "0x200000a0",
                "name": "hdma_adc1.XferCpltCallback",
                "type": 5
            },
            {
                "address": "0x200000a8",
                "name": "hdma_adc1.XferErrorCallback",
                "type": 5
            },
            {
                "address": "0x200000a4",
                "name": "hdma_adc1.XferHalfCpltCallback",
                "type": 5
            },
            {
                "address": "0x200000d8",
                "name": "htim3.Channel",
                "type": 2
            },
            {
                "address": "0x20000100",
                "name": "htim3.ChannelNState[0]",
                "type": 2
            },
            {
                "address": "0x200000fa",
                "name": "htim3.ChannelState[0]",
                "type": 2
            },
            {
                "address": "0x20000104",
                "name": "htim3.DMABurstState",
                "type": 2
            },
            {
                "address": "0x200000dc",
                "name": "htim3.hdma[0]",
                "type": 5
            },
            {
                "address": "0x200000d4",
                "name": "htim3.Init.AutoReloadPreload",
                "type": 5
            },
            {
                "address": "0x200000cc",
                "name": "htim3.Init.ClockDivision",
                "type": 5
            },
            {
                "address": "0x200000c4",
                "name": "htim3.Init.CounterMode",
                "type": 5
            },
            {
                "address": "0x200000c8",
                "name": "htim3.Init.Period",
                "type": 5
            },
            {
                "address": "0x200000c0",
                "name": "htim3.Init.Prescaler",
                "type": 5
            },
            {
                "address": "0x200000d0",
                "name": "htim3.Init.RepetitionCounter",
                "type": 5
            },
            {
                "address": "0x200000bc",
                "name": "htim3.Instance",
                "type": 5
            },
            {
                "address": "0x200000f8",
                "name": "htim3.Lock",
                "type": 2
            },
            {
                "address": "0x200000f9",
                "name": "htim3.State",
                "type": 2
            },
            {
                "address": "0x2000014c",
                "name": "internalAdcRawData[0]",
                "type": 3
            },
            {
                "address": "0x2000013c",
                "name": "pid.command_prev",
                "type": 9
            },
            {
                "address": "0x20000138",
                "name": "pid.command_sat_prev",
                "type": 9
            },
            {
                "address": "0x20000134",
                "name": "pid.deriv_prev",
                "type": 9
            },
            {
                "address": "0x20000130",
                "name": "pid.err_prev",
                "type": 9
            },
            {
                "address": "0x2000012c",
                "name": "pid.integral",
                "type": 9
            },
            {
                "address": "0x20000114",
                "name": "pid.Kaw",
                "type": 9
            },
            {
                "address": "0x20000110",
                "name": "pid.Kd",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x2000010c",
                "name": "pid.Ki",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000108",
                "name": "pid.Kp",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000120",
                "name": "pid.max",
                "type": 9
            },
            {
                "address": "0x20000128",
                "name": "pid.max_rate",
                "type": 9
            },
            {
                "address": "0x20000124",
                "name": "pid.min",
                "type": 9
            },
            {
                "address": "0x2000011c",
                "name": "pid.T",
                "type": 9
            },
            {
                "address": "0x20000118",
                "name": "pid.T_C",
                "type": 9
            },
            {
                "address": "0x20000000",
                "name": "SystemCoreClock",
                "type": 5
            },
            {
                "address": "0x20000158",
                "name": "uwTick",
                "type": 5
            },
            {
                "address": "0x20000008",
                "name": "uwTickFreq",
                "type": 2
            },
            {
                "address": "0x20000004",
                "name": "uwTickPrio",
                "type": 5
            }
        ],
        "expand": false,
        "filename": "Buck_control.elf",
        "exeModifiedTime": 1758673114166,
        "configLastUpdate": 1758674240534
    },
    {
        "id": "17d09b07.741a55",
        "type": "ui_tab",
        "name": "Charts",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
][
    {
        "id": "b77328a70ae43e92",
        "type": "tab",
        "label": "Fluxo 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "fd7ba98a334942ee",
        "type": "ui_chartst",
        "z": "b77328a70ae43e92",
        "group": "f9c34dde.1e2f4",
        "name": "Voltages",
        "order": 1,
        "width": 0,
        "height": 0,
        "chartType": "line",
        "curveType": "linear",
        "duration": "10",
        "ymin": "",
        "ymax": "",
        "x": 840,
        "y": 400,
        "wires": []
    },
    {
        "id": "58574b4c9d80ca72",
        "type": "acquisition out",
        "z": "b77328a70ae43e92",
        "name": "St-link_out",
        "probeconfig": "95a6ef037ae809e2",
        "x": 630,
        "y": 280,
        "wires": []
    },
    {
        "id": "61606035aa8d9fe7",
        "type": "acquisition in",
        "z": "b77328a70ae43e92",
        "name": "St-link_In",
        "probeconfig": "bed83272c9eb550e",
        "x": 280,
        "y": 400,
        "wires": [
            [
                "e5e8b7741cba1232"
            ],
            []
        ]
    },
    {
        "id": "dd254cdded48c979",
        "type": "variables",
        "z": "b77328a70ae43e92",
        "groupname": "Voltage",
        "accesspoint": 0,
        "execonfig": "d355e2dbb5bc0584",
        "variablelist": [],
        "triggerstartmode": "manual",
        "triggername": "Buck.setPoint",
        "triggerthreshold": "30000",
        "frequency": "",
        "frequencyType": "0",
        "snapshotheader": "",
        "mode": "direct",
        "lastImportedTime": 1758674180346,
        "openStatus": true,
        "x": 320,
        "y": 280,
        "wires": [
            [
                "58574b4c9d80ca72"
            ],
            []
        ],
        "info": "Bloco usado para obter os valores de tensão:\r\n- globalData.halfBridgeVoltage\r\n- globalData.inputVoltage\r\n- globalData.outputVoltage"
    },
    {
        "id": "e5e8b7741cba1232",
        "type": "processing",
        "z": "b77328a70ae43e92",
        "groupname": "Voltage",
        "groupid": "0f00b03f30872c78",
        "expressions": [],
        "statistics": [],
        "logmode": "no",
        "logformat": "stcm",
        "x": 520,
        "y": 400,
        "wires": [
            [
                "fd7ba98a334942ee"
            ],
            []
        ]
    },
    {
        "id": "1f583049366daebb",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Start_in",
        "links": [
            "dcdfde1a658d8d43"
        ],
        "x": 55,
        "y": 260,
        "wires": [
            [
                "dd254cdded48c979"
            ]
        ]
    },
    {
        "id": "35288fd867e01ea1",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Stop_in",
        "links": [
            "c577fc41904e334c"
        ],
        "x": 55,
        "y": 320,
        "wires": [
            [
                "dd254cdded48c979"
            ]
        ]
    },
    {
        "id": "8c7fdda1400848ad",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Kd",
        "links": [
            "16c596c9e1d8b0ba"
        ],
        "x": 465,
        "y": 100,
        "wires": [
            [
                "58574b4c9d80ca72"
            ]
        ]
    },
    {
        "id": "6f03d6aef7837a4f",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Kp",
        "links": [
            "e9d4e0be3eac5234"
        ],
        "x": 465,
        "y": 140,
        "wires": [
            [
                "58574b4c9d80ca72"
            ]
        ]
    },
    {
        "id": "92e18d83557ddae7",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "SetPoint",
        "links": [
            "c5b93b07d6e57250"
        ],
        "x": 465,
        "y": 180,
        "wires": [
            [
                "58574b4c9d80ca72"
            ]
        ]
    },
    {
        "id": "e83acb20dca38899",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Clear",
        "links": [
            "b1ecddcece481370"
        ],
        "x": 705,
        "y": 440,
        "wires": [
            [
                "fd7ba98a334942ee"
            ]
        ]
    },
    {
        "id": "f9bc1dc828c1fa93",
        "type": "comment",
        "z": "b77328a70ae43e92",
        "name": "",
        "info": "Configurar os nós:\nVoltage e St-link_out\n\nOlhar a descrição do nó",
        "x": 360,
        "y": 220,
        "wires": []
    },
    {
        "id": "179370bafec664c9",
        "type": "ui_slider",
        "z": "b77328a70ae43e92",
        "name": "",
        "label": "Setpoint",
        "tooltip": "",
        "group": "2e356a733a6d26e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "topic",
        "topicType": "msg",
        "min": 0,
        "max": "35",
        "step": 1,
        "className": "",
        "x": 240,
        "y": 1420,
        "wires": [
            [
                "c2d04932c88af2de",
                "c6b577230f2382ae"
            ]
        ]
    },
    {
        "id": "a9eb92947c311d12",
        "type": "change",
        "z": "b77328a70ae43e92",
        "name": "set.topic",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "write",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 1420,
        "wires": [
            [
                "c5b93b07d6e57250"
            ]
        ]
    },
    {
        "id": "158793627d562123",
        "type": "inject",
        "z": "b77328a70ae43e92",
        "name": "initialize",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "value",
        "payload": "20",
        "payloadType": "str",
        "x": 100,
        "y": 1420,
        "wires": [
            [
                "179370bafec664c9"
            ]
        ]
    },
    {
        "id": "c5b93b07d6e57250",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "set_setpoint",
        "mode": "link",
        "links": [
            "28feee5c30d904ca",
            "92e18d83557ddae7"
        ],
        "x": 935,
        "y": 1420,
        "wires": []
    },
    {
        "id": "c2d04932c88af2de",
        "type": "ui_text",
        "z": "b77328a70ae43e92",
        "group": "2e356a733a6d26e8",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Setpoint Value",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 500,
        "y": 1480,
        "wires": []
    },
    {
        "id": "6e63a8fddc89c6c2",
        "type": "template",
        "z": "b77328a70ae43e92",
        "name": "write_msg",
        "field": "payload",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"variablelist\":[\n        {\n            \"address\": \"{{payload.addr}}\",\n            \"type\": 9,\n            \"value\": \"{{payload.value}}\"\n        }\n    ],\n    \"acesspoint\":0\n}",
        "output": "json",
        "x": 630,
        "y": 1420,
        "wires": [
            [
                "a9eb92947c311d12"
            ]
        ]
    },
    {
        "id": "c97f0da85072603a",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Setpoint",
        "links": [
            "ec10f022a70d95ee"
        ],
        "x": 335,
        "y": 1360,
        "wires": [
            [
                "c6b577230f2382ae"
            ]
        ]
    },
    {
        "id": "c6b577230f2382ae",
        "type": "join",
        "z": "b77328a70ae43e92",
        "name": "teste",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "useparts": false,
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 440,
        "y": 1420,
        "wires": [
            [
                "6e63a8fddc89c6c2"
            ]
        ]
    },
    {
        "id": "787f11ed7ad2c99c",
        "type": "ui_slider",
        "z": "b77328a70ae43e92",
        "name": "",
        "label": "Kp",
        "tooltip": "",
        "group": "2e356a733a6d26e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "topic",
        "topicType": "msg",
        "min": 0,
        "max": "35",
        "step": 1,
        "className": "",
        "x": 230,
        "y": 1640,
        "wires": [
            [
                "3a19a3f781467fd2",
                "78f344997ea247d9"
            ]
        ]
    },
    {
        "id": "f2c8a3d091eb54ff",
        "type": "change",
        "z": "b77328a70ae43e92",
        "name": "set.topic",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "write",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 1640,
        "wires": [
            [
                "e9d4e0be3eac5234"
            ]
        ]
    },
    {
        "id": "6cbea6036fb03360",
        "type": "inject",
        "z": "b77328a70ae43e92",
        "name": "initialize",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "value",
        "payload": "20",
        "payloadType": "str",
        "x": 100,
        "y": 1640,
        "wires": [
            [
                "787f11ed7ad2c99c"
            ]
        ]
    },
    {
        "id": "e9d4e0be3eac5234",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "set_kp",
        "mode": "link",
        "links": [
            "6f03d6aef7837a4f"
        ],
        "x": 935,
        "y": 1640,
        "wires": []
    },
    {
        "id": "3a19a3f781467fd2",
        "type": "ui_text",
        "z": "b77328a70ae43e92",
        "group": "2e356a733a6d26e8",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Kp Value",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 480,
        "y": 1700,
        "wires": []
    },
    {
        "id": "b103549494df2bd2",
        "type": "template",
        "z": "b77328a70ae43e92",
        "name": "write_msg",
        "field": "payload",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"variablelist\":[\n        {\n            \"address\": \"{{payload.addr}}\",\n            \"type\": 9,\n            \"value\": \"{{payload.value}}\"\n        }\n    ],\n    \"acesspoint\":0\n}",
        "output": "json",
        "x": 630,
        "y": 1640,
        "wires": [
            [
                "f2c8a3d091eb54ff"
            ]
        ]
    },
    {
        "id": "d0a8791c89871fd5",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Kp",
        "links": [
            "7299af6d81d99adf"
        ],
        "x": 335,
        "y": 1580,
        "wires": [
            [
                "78f344997ea247d9"
            ]
        ]
    },
    {
        "id": "78f344997ea247d9",
        "type": "join",
        "z": "b77328a70ae43e92",
        "name": "teste",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "useparts": false,
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 440,
        "y": 1640,
        "wires": [
            [
                "b103549494df2bd2"
            ]
        ]
    },
    {
        "id": "41e56ef5af62d331",
        "type": "ui_slider",
        "z": "b77328a70ae43e92",
        "name": "",
        "label": "Ki",
        "tooltip": "",
        "group": "2e356a733a6d26e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "topic",
        "topicType": "msg",
        "min": 0,
        "max": "35",
        "step": 1,
        "className": "",
        "x": 230,
        "y": 1840,
        "wires": [
            [
                "fe9f1b79ca5bf473",
                "c3973be3e495bc7f"
            ]
        ]
    },
    {
        "id": "5cb04769944fc884",
        "type": "change",
        "z": "b77328a70ae43e92",
        "name": "set.topic",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "write",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 1840,
        "wires": [
            [
                "486f578f0d68d485"
            ]
        ]
    },
    {
        "id": "74401aefec152283",
        "type": "inject",
        "z": "b77328a70ae43e92",
        "name": "initialize",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "value",
        "payload": "20",
        "payloadType": "str",
        "x": 100,
        "y": 1840,
        "wires": [
            [
                "41e56ef5af62d331"
            ]
        ]
    },
    {
        "id": "486f578f0d68d485",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "set_ki",
        "mode": "link",
        "links": [
            "a5cfdb798b294974"
        ],
        "x": 935,
        "y": 1840,
        "wires": []
    },
    {
        "id": "fe9f1b79ca5bf473",
        "type": "ui_text",
        "z": "b77328a70ae43e92",
        "group": "2e356a733a6d26e8",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Ki Value",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 480,
        "y": 1900,
        "wires": []
    },
    {
        "id": "af45239040f49feb",
        "type": "template",
        "z": "b77328a70ae43e92",
        "name": "write_msg",
        "field": "payload",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"variablelist\":[\n        {\n            \"address\": \"{{payload.addr}}\",\n            \"type\": 9,\n            \"value\": \"{{payload.value}}\"\n        }\n    ],\n    \"acesspoint\":0\n}",
        "output": "json",
        "x": 630,
        "y": 1840,
        "wires": [
            [
                "5cb04769944fc884"
            ]
        ]
    },
    {
        "id": "b6c89582013259a8",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Ki",
        "links": [
            "f64f412e8fcff518"
        ],
        "x": 335,
        "y": 1780,
        "wires": [
            [
                "c3973be3e495bc7f"
            ]
        ]
    },
    {
        "id": "c3973be3e495bc7f",
        "type": "join",
        "z": "b77328a70ae43e92",
        "name": "teste",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "useparts": false,
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 440,
        "y": 1840,
        "wires": [
            [
                "af45239040f49feb"
            ]
        ]
    },
    {
        "id": "a0f94b33cbf2f9b9",
        "type": "ui_slider",
        "z": "b77328a70ae43e92",
        "name": "",
        "label": "Kd",
        "tooltip": "",
        "group": "2e356a733a6d26e8",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "topic",
        "topicType": "msg",
        "min": 0,
        "max": "35",
        "step": 1,
        "className": "",
        "x": 230,
        "y": 2040,
        "wires": [
            [
                "5a59d92eb0310632",
                "13700e46c67dd482"
            ]
        ]
    },
    {
        "id": "9e445170359e1740",
        "type": "change",
        "z": "b77328a70ae43e92",
        "name": "set.topic",
        "rules": [
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "write",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 820,
        "y": 2040,
        "wires": [
            [
                "16c596c9e1d8b0ba"
            ]
        ]
    },
    {
        "id": "255ac557818c4c0c",
        "type": "inject",
        "z": "b77328a70ae43e92",
        "name": "initialize",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "value",
        "payload": "20",
        "payloadType": "str",
        "x": 100,
        "y": 2040,
        "wires": [
            [
                "a0f94b33cbf2f9b9"
            ]
        ]
    },
    {
        "id": "16c596c9e1d8b0ba",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "SetPoint",
        "mode": "link",
        "links": [
            "8c7fdda1400848ad"
        ],
        "x": 935,
        "y": 2040,
        "wires": []
    },
    {
        "id": "5a59d92eb0310632",
        "type": "ui_text",
        "z": "b77328a70ae43e92",
        "group": "2e356a733a6d26e8",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Kd Value",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 480,
        "y": 2100,
        "wires": []
    },
    {
        "id": "805d42448b02bc40",
        "type": "template",
        "z": "b77328a70ae43e92",
        "name": "write_msg",
        "field": "payload",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"variablelist\":[\n        {\n            \"address\": \"{{payload.addr}}\",\n            \"type\": 9,\n            \"value\": \"{{payload.value}}\"\n        }\n    ],\n    \"acesspoint\":0\n}",
        "output": "json",
        "x": 630,
        "y": 2040,
        "wires": [
            [
                "9e445170359e1740"
            ]
        ]
    },
    {
        "id": "db4e590d6d6bbda7",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Kd",
        "links": [
            "a3b0c92d8a600b20"
        ],
        "x": 335,
        "y": 1980,
        "wires": [
            [
                "13700e46c67dd482"
            ]
        ]
    },
    {
        "id": "13700e46c67dd482",
        "type": "join",
        "z": "b77328a70ae43e92",
        "name": "teste",
        "mode": "custom",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "useparts": false,
        "accumulate": true,
        "timeout": "",
        "count": "2",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "num",
        "reduceFixup": "",
        "x": 440,
        "y": 2040,
        "wires": [
            [
                "805d42448b02bc40"
            ]
        ]
    },
    {
        "id": "acd869dd8d43291e",
        "type": "acquisition out",
        "z": "b77328a70ae43e92",
        "name": "St-link_out1",
        "probeconfig": "95a6ef037ae809e2",
        "x": 530,
        "y": 960,
        "wires": []
    },
    {
        "id": "32f08420e45927f0",
        "type": "variables",
        "z": "b77328a70ae43e92",
        "groupname": "Values",
        "accesspoint": 0,
        "execonfig": "aeecb6196bac04a9",
        "variablelist": [],
        "triggerstartmode": "manual",
        "triggername": "Buck.setPoint",
        "triggerthreshold": "30000",
        "frequency": "",
        "frequencyType": "0",
        "snapshotheader": "",
        "mode": "direct",
        "lastImportedTime": 1758674240869,
        "openStatus": true,
        "x": 330,
        "y": 780,
        "wires": [
            [
                "acd869dd8d43291e",
                "e364838204a6504f",
                "31c0cac1582970d6",
                "1d8f347ad407ddb7",
                "de2c20cced85d6c8"
            ],
            []
        ],
        "info": "Bloco usado para obter os valores dos estados:\r\n- globalData.command\r\n- globalData.currentState\r\n- globalData.errorStatus"
    },
    {
        "id": "70e8d8ddebb73e33",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Start_in1",
        "links": [
            "dcdfde1a658d8d43"
        ],
        "x": 75,
        "y": 760,
        "wires": [
            [
                "32f08420e45927f0"
            ]
        ]
    },
    {
        "id": "1c5287065e9c5e6d",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Stop_in1",
        "links": [
            "c577fc41904e334c"
        ],
        "x": 75,
        "y": 820,
        "wires": [
            [
                "32f08420e45927f0"
            ]
        ]
    },
    {
        "id": "e364838204a6504f",
        "type": "function",
        "z": "b77328a70ae43e92",
        "name": "Address Extract",
        "func": "var nome_variavel = \"pid.Kp\";\nvar variaveis = msg.payload.variablelist;\n\nfor (var i = 0; i < variaveis.length; i++) {\n    if (variaveis[i].name === nome_variavel) {\n        msg.payload = variaveis[i].address;\n        break;\n    }\n}\n\nvar jsn = {\n    \"topic\":\"addr\",\n    \"payload\": msg.payload\n}\nreturn jsn;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 720,
        "wires": [
            [
                "7299af6d81d99adf"
            ]
        ]
    },
    {
        "id": "7299af6d81d99adf",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Addr_Kp",
        "mode": "link",
        "links": [
            "d0a8791c89871fd5"
        ],
        "x": 685,
        "y": 720,
        "wires": []
    },
    {
        "id": "ec10f022a70d95ee",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Addr_setpoint",
        "mode": "link",
        "links": [
            "c97f0da85072603a"
        ],
        "x": 685,
        "y": 660,
        "wires": []
    },
    {
        "id": "31c0cac1582970d6",
        "type": "function",
        "z": "b77328a70ae43e92",
        "name": "Address Extract",
        "func": "var nome_variavel = \"Buck.setPoint\";\nvar variaveis = msg.payload.variablelist;\n\nfor (var i = 0; i < variaveis.length; i++) {\n    if (variaveis[i].name === nome_variavel) {\n        msg.payload = variaveis[i].address;\n        break;\n    }\n}\n\nvar jsn = {\n    \"topic\":\"addr\",\n    \"payload\": msg.payload\n}\nreturn jsn;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 660,
        "wires": [
            [
                "ec10f022a70d95ee"
            ]
        ]
    },
    {
        "id": "9b7e72f87e91eaf3",
        "type": "comment",
        "z": "b77328a70ae43e92",
        "name": "",
        "info": "Configurar os nós:\nStates e St-link_out1\n\nOlhar a descrição do nó",
        "x": 320,
        "y": 700,
        "wires": []
    },
    {
        "id": "fcebbdd9d5e0ba30",
        "type": "ui_button",
        "z": "b77328a70ae43e92",
        "name": "",
        "group": "2e356a733a6d26e8",
        "order": 3,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "Clear Graphs",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "clear",
        "topicType": "str",
        "x": 90,
        "y": 1080,
        "wires": [
            [
                "b1ecddcece481370"
            ]
        ]
    },
    {
        "id": "6a901a5263a2c83c",
        "type": "ui_button",
        "z": "b77328a70ae43e92",
        "name": "",
        "group": "2e356a733a6d26e8",
        "order": 1,
        "width": "5",
        "height": "1",
        "passthru": false,
        "label": "START Acquisition",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "start",
        "topicType": "str",
        "x": 110,
        "y": 1140,
        "wires": [
            [
                "dcdfde1a658d8d43"
            ]
        ]
    },
    {
        "id": "7403b757b905600a",
        "type": "ui_button",
        "z": "b77328a70ae43e92",
        "name": "",
        "group": "2e356a733a6d26e8",
        "order": 2,
        "width": "5",
        "height": "1",
        "passthru": true,
        "label": "STOP Acquisition",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "stop",
        "topicType": "str",
        "x": 110,
        "y": 1220,
        "wires": [
            [
                "c577fc41904e334c"
            ]
        ]
    },
    {
        "id": "dcdfde1a658d8d43",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Start",
        "mode": "link",
        "links": [
            "1f583049366daebb",
            "70e8d8ddebb73e33"
        ],
        "x": 295,
        "y": 1140,
        "wires": []
    },
    {
        "id": "c577fc41904e334c",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Stop",
        "mode": "link",
        "links": [
            "1c5287065e9c5e6d",
            "35288fd867e01ea1"
        ],
        "x": 295,
        "y": 1220,
        "wires": []
    },
    {
        "id": "b1ecddcece481370",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Clear",
        "mode": "link",
        "links": [
            "e83acb20dca38899"
        ],
        "x": 295,
        "y": 1080,
        "wires": []
    },
    {
        "id": "1d8f347ad407ddb7",
        "type": "function",
        "z": "b77328a70ae43e92",
        "name": "Address Extract",
        "func": "var nome_variavel = \"pid.Ki\";\nvar variaveis = msg.payload.variablelist;\n\nfor (var i = 0; i < variaveis.length; i++) {\n    if (variaveis[i].name === nome_variavel) {\n        msg.payload = variaveis[i].address;\n        break;\n    }\n}\n\nvar jsn = {\n    \"topic\":\"addr\",\n    \"payload\": msg.payload\n}\nreturn jsn;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 780,
        "wires": [
            [
                "f64f412e8fcff518"
            ]
        ]
    },
    {
        "id": "f64f412e8fcff518",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Addr_Ki",
        "mode": "link",
        "links": [
            "b6c89582013259a8"
        ],
        "x": 685,
        "y": 780,
        "wires": []
    },
    {
        "id": "de2c20cced85d6c8",
        "type": "function",
        "z": "b77328a70ae43e92",
        "name": "Address Extract",
        "func": "var nome_variavel = \"pid.Kd\";\nvar variaveis = msg.payload.variablelist;\n\nfor (var i = 0; i < variaveis.length; i++) {\n    if (variaveis[i].name === nome_variavel) {\n        msg.payload = variaveis[i].address;\n        break;\n    }\n}\n\nvar jsn = {\n    \"topic\":\"addr\",\n    \"payload\": msg.payload\n}\nreturn jsn;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 840,
        "wires": [
            [
                "a3b0c92d8a600b20"
            ]
        ]
    },
    {
        "id": "a3b0c92d8a600b20",
        "type": "link out",
        "z": "b77328a70ae43e92",
        "name": "Addr_Kd",
        "mode": "link",
        "links": [
            "db4e590d6d6bbda7"
        ],
        "x": 685,
        "y": 840,
        "wires": []
    },
    {
        "id": "a5cfdb798b294974",
        "type": "link in",
        "z": "b77328a70ae43e92",
        "name": "Ki",
        "links": [
            "486f578f0d68d485"
        ],
        "x": 465,
        "y": 60,
        "wires": [
            [
                "58574b4c9d80ca72"
            ]
        ]
    },
    {
        "id": "f9c34dde.1e2f4",
        "type": "ui_group",
        "name": "Voltages",
        "tab": "17d09b07.741a55",
        "order": 2,
        "disp": true,
        "width": "10",
        "collapse": false,
        "className": ""
    },
    {
        "id": "95a6ef037ae809e2",
        "type": "probe",
        "probeid": "640017001500004C3359534E",
        "probename": "ST-Link v2 640017001500004C3359534E",
        "protocol": "SWD",
        "frequency": "1.8 MHz - Default",
        "probeproperty": "{\"SWD\":[\"4.6 MHz\",\"1.8 MHz - Default\",\"950 kHz\",\"400 kHz\",\"150 kHz\"],\"JTAG\":[\"18 MHz\",\"9 MHz\",\"4.5 MHz\",\"2.25 MHz\",\"1.12 MHz - Default\",\"560 kHz\",\"280 kHz\",\"140 kHz\"]}",
        "probeversion": "ST Link firmware version V2.J45",
        "connectionType": "p2p",
        "nickname": "St-link-Caio"
    },
    {
        "id": "bed83272c9eb550e",
        "type": "probe",
        "probeid": "640017001500004C3359534E",
        "probename": "ST-Link v2 640017001500004C3359534E",
        "protocol": "SWD",
        "frequency": "1.8 MHz - Default",
        "probeproperty": "{\"SWD\":[\"4.6 MHz\",\"1.8 MHz - Default\",\"950 kHz\",\"400 kHz\",\"150 kHz\"],\"JTAG\":[\"18 MHz\",\"9 MHz\",\"4.5 MHz\",\"2.25 MHz\",\"1.12 MHz - Default\",\"560 kHz\",\"280 kHz\",\"140 kHz\"]}",
        "probeversion": "ST Link firmware version V2.J45",
        "connectionType": "p2p",
        "nickname": "St-link"
    },
    {
        "id": "d355e2dbb5bc0584",
        "type": "exe-config",
        "name": "Buck_control",
        "exefile": "C:\\Users\\caiom\\STM32CubeIDE\\workspace_2\\Buck_control\\Debug\\Buck_control.elf",
        "exefolder": "C:\\Users\\caiom\\STM32CubeIDE\\workspace_2\\Buck_control\\Debug",
        "exevariablelist": [
            {
                "address": "0x08004fbc",
                "name": "AHBPrescTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fc6",
                "name": "AHBPrescTable[10]",
                "type": 1
            },
            {
                "address": "0x08004fc7",
                "name": "AHBPrescTable[11]",
                "type": 1
            },
            {
                "address": "0x08004fc8",
                "name": "AHBPrescTable[12]",
                "type": 1
            },
            {
                "address": "0x08004fc9",
                "name": "AHBPrescTable[13]",
                "type": 1
            },
            {
                "address": "0x08004fca",
                "name": "AHBPrescTable[14]",
                "type": 1
            },
            {
                "address": "0x08004fcb",
                "name": "AHBPrescTable[15]",
                "type": 1
            },
            {
                "address": "0x08004fbd",
                "name": "AHBPrescTable[1]",
                "type": 1
            },
            {
                "address": "0x08004fbe",
                "name": "AHBPrescTable[2]",
                "type": 1
            },
            {
                "address": "0x08004fbf",
                "name": "AHBPrescTable[3]",
                "type": 1
            },
            {
                "address": "0x08004fc0",
                "name": "AHBPrescTable[4]",
                "type": 1
            },
            {
                "address": "0x08004fc1",
                "name": "AHBPrescTable[5]",
                "type": 1
            },
            {
                "address": "0x08004fc2",
                "name": "AHBPrescTable[6]",
                "type": 1
            },
            {
                "address": "0x08004fc3",
                "name": "AHBPrescTable[7]",
                "type": 1
            },
            {
                "address": "0x08004fc4",
                "name": "AHBPrescTable[8]",
                "type": 1
            },
            {
                "address": "0x08004fc5",
                "name": "AHBPrescTable[9]",
                "type": 1
            },
            {
                "address": "0x08004fcc",
                "name": "aPLLMULFactorTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fd6",
                "name": "aPLLMULFactorTable[10]",
                "type": 1
            },
            {
                "address": "0x08004fd7",
                "name": "aPLLMULFactorTable[11]",
                "type": 1
            },
            {
                "address": "0x08004fd8",
                "name": "aPLLMULFactorTable[12]",
                "type": 1
            },
            {
                "address": "0x08004fd9",
                "name": "aPLLMULFactorTable[13]",
                "type": 1
            },
            {
                "address": "0x08004fda",
                "name": "aPLLMULFactorTable[14]",
                "type": 1
            },
            {
                "address": "0x08004fdb",
                "name": "aPLLMULFactorTable[15]",
                "type": 1
            },
            {
                "address": "0x08004fcd",
                "name": "aPLLMULFactorTable[1]",
                "type": 1
            },
            {
                "address": "0x08004fce",
                "name": "aPLLMULFactorTable[2]",
                "type": 1
            },
            {
                "address": "0x08004fcf",
                "name": "aPLLMULFactorTable[3]",
                "type": 1
            },
            {
                "address": "0x08004fd0",
                "name": "aPLLMULFactorTable[4]",
                "type": 1
            },
            {
                "address": "0x08004fd1",
                "name": "aPLLMULFactorTable[5]",
                "type": 1
            },
            {
                "address": "0x08004fd2",
                "name": "aPLLMULFactorTable[6]",
                "type": 1
            },
            {
                "address": "0x08004fd3",
                "name": "aPLLMULFactorTable[7]",
                "type": 1
            },
            {
                "address": "0x08004fd4",
                "name": "aPLLMULFactorTable[8]",
                "type": 1
            },
            {
                "address": "0x08004fd5",
                "name": "aPLLMULFactorTable[9]",
                "type": 1
            },
            {
                "address": "0x08004fdc",
                "name": "aPredivFactorTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fe6",
                "name": "aPredivFactorTable[10]",
                "type": 1
            },
            {
                "address": "0x08004fe7",
                "name": "aPredivFactorTable[11]",
                "type": 1
            },
            {
                "address": "0x08004fe8",
                "name": "aPredivFactorTable[12]",
                "type": 1
            },
            {
                "address": "0x08004fe9",
                "name": "aPredivFactorTable[13]",
                "type": 1
            },
            {
                "address": "0x08004fea",
                "name": "aPredivFactorTable[14]",
                "type": 1
            },
            {
                "address": "0x08004feb",
                "name": "aPredivFactorTable[15]",
                "type": 1
            },
            {
                "address": "0x08004fdd",
                "name": "aPredivFactorTable[1]",
                "type": 1
            },
            {
                "address": "0x08004fde",
                "name": "aPredivFactorTable[2]",
                "type": 1
            },
            {
                "address": "0x08004fdf",
                "name": "aPredivFactorTable[3]",
                "type": 1
            },
            {
                "address": "0x08004fe0",
                "name": "aPredivFactorTable[4]",
                "type": 1
            },
            {
                "address": "0x08004fe1",
                "name": "aPredivFactorTable[5]",
                "type": 1
            },
            {
                "address": "0x08004fe2",
                "name": "aPredivFactorTable[6]",
                "type": 1
            },
            {
                "address": "0x08004fe3",
                "name": "aPredivFactorTable[7]",
                "type": 1
            },
            {
                "address": "0x08004fe4",
                "name": "aPredivFactorTable[8]",
                "type": 1
            },
            {
                "address": "0x08004fe5",
                "name": "aPredivFactorTable[9]",
                "type": 1
            },
            {
                "address": "0x20000148",
                "name": "Buck.setPoint",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000140",
                "name": "Buck.Vin",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000144",
                "name": "Buck.Vout",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000154",
                "name": "dutyCycle",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000060",
                "name": "hadc1.DMA_Handle",
                "type": 5
            },
            {
                "address": "0x2000006c",
                "name": "hadc1.ErrorCode",
                "type": 5
            },
            {
                "address": "0x2000002c",
                "name": "hadc1.Init.ClockPrescaler",
                "type": 5
            },
            {
                "address": "0x20000041",
                "name": "hadc1.Init.ContinuousConvMode",
                "type": 2
            },
            {
                "address": "0x20000034",
                "name": "hadc1.Init.DataAlign",
                "type": 5
            },
            {
                "address": "0x20000048",
                "name": "hadc1.Init.DiscontinuousConvMode",
                "type": 2
            },
            {
                "address": "0x20000058",
                "name": "hadc1.Init.DMAContinuousRequests",
                "type": 2
            },
            {
                "address": "0x2000003c",
                "name": "hadc1.Init.EOCSelection",
                "type": 5
            },
            {
                "address": "0x20000050",
                "name": "hadc1.Init.ExternalTrigConv",
                "type": 5
            },
            {
                "address": "0x20000054",
                "name": "hadc1.Init.ExternalTrigConvEdge",
                "type": 5
            },
            {
                "address": "0x20000040",
                "name": "hadc1.Init.LowPowerAutoWait",
                "type": 2
            },
            {
                "address": "0x20000044",
                "name": "hadc1.Init.NbrOfConversion",
                "type": 5
            },
            {
                "address": "0x2000004c",
                "name": "hadc1.Init.NbrOfDiscConversion",
                "type": 5
            },
            {
                "address": "0x2000005c",
                "name": "hadc1.Init.Overrun",
                "type": 5
            },
            {
                "address": "0x20000030",
                "name": "hadc1.Init.Resolution",
                "type": 5
            },
            {
                "address": "0x20000038",
                "name": "hadc1.Init.ScanConvMode",
                "type": 5
            },
            {
                "address": "0x20000074",
                "name": "hadc1.InjectionConfig.ChannelCount",
                "type": 5
            },
            {
                "address": "0x20000070",
                "name": "hadc1.InjectionConfig.ContextQueue",
                "type": 5
            },
            {
                "address": "0x20000028",
                "name": "hadc1.Instance",
                "type": 5
            },
            {
                "address": "0x20000064",
                "name": "hadc1.Lock",
                "type": 2
            },
            {
                "address": "0x20000068",
                "name": "hadc1.State",
                "type": 5
            },
            {
                "address": "0x200000b8",
                "name": "hdma_adc1.ChannelIndex",
                "type": 5
            },
            {
                "address": "0x200000b4",
                "name": "hdma_adc1.DmaBaseAddress",
                "type": 5
            },
            {
                "address": "0x200000b0",
                "name": "hdma_adc1.ErrorCode",
                "type": 5
            },
            {
                "address": "0x2000007c",
                "name": "hdma_adc1.Init.Direction",
                "type": 5
            },
            {
                "address": "0x2000008c",
                "name": "hdma_adc1.Init.MemDataAlignment",
                "type": 5
            },
            {
                "address": "0x20000084",
                "name": "hdma_adc1.Init.MemInc",
                "type": 5
            },
            {
                "address": "0x20000090",
                "name": "hdma_adc1.Init.Mode",
                "type": 5
            },
            {
                "address": "0x20000088",
                "name": "hdma_adc1.Init.PeriphDataAlignment",
                "type": 5
            },
            {
                "address": "0x20000080",
                "name": "hdma_adc1.Init.PeriphInc",
                "type": 5
            },
            {
                "address": "0x20000094",
                "name": "hdma_adc1.Init.Priority",
                "type": 5
            },
            {
                "address": "0x20000078",
                "name": "hdma_adc1.Instance",
                "type": 5
            },
            {
                "address": "0x20000098",
                "name": "hdma_adc1.Lock",
                "type": 2
            },
            {
                "address": "0x2000009c",
                "name": "hdma_adc1.Parent",
                "type": 5
            },
            {
                "address": "0x20000099",
                "name": "hdma_adc1.State",
                "type": 2
            },
            {
                "address": "0x200000ac",
                "name": "hdma_adc1.XferAbortCallback",
                "type": 5
            },
            {
                "address": "0x200000a0",
                "name": "hdma_adc1.XferCpltCallback",
                "type": 5
            },
            {
                "address": "0x200000a8",
                "name": "hdma_adc1.XferErrorCallback",
                "type": 5
            },
            {
                "address": "0x200000a4",
                "name": "hdma_adc1.XferHalfCpltCallback",
                "type": 5
            },
            {
                "address": "0x200000d8",
                "name": "htim3.Channel",
                "type": 2
            },
            {
                "address": "0x20000100",
                "name": "htim3.ChannelNState[0]",
                "type": 2
            },
            {
                "address": "0x20000101",
                "name": "htim3.ChannelNState[1]",
                "type": 2
            },
            {
                "address": "0x20000102",
                "name": "htim3.ChannelNState[2]",
                "type": 2
            },
            {
                "address": "0x20000103",
                "name": "htim3.ChannelNState[3]",
                "type": 2
            },
            {
                "address": "0x200000fa",
                "name": "htim3.ChannelState[0]",
                "type": 2
            },
            {
                "address": "0x200000fb",
                "name": "htim3.ChannelState[1]",
                "type": 2
            },
            {
                "address": "0x200000fc",
                "name": "htim3.ChannelState[2]",
                "type": 2
            },
            {
                "address": "0x200000fd",
                "name": "htim3.ChannelState[3]",
                "type": 2
            },
            {
                "address": "0x200000fe",
                "name": "htim3.ChannelState[4]",
                "type": 2
            },
            {
                "address": "0x200000ff",
                "name": "htim3.ChannelState[5]",
                "type": 2
            },
            {
                "address": "0x20000104",
                "name": "htim3.DMABurstState",
                "type": 2
            },
            {
                "address": "0x200000dc",
                "name": "htim3.hdma[0]",
                "type": 5
            },
            {
                "address": "0x200000e0",
                "name": "htim3.hdma[1]",
                "type": 5
            },
            {
                "address": "0x200000e4",
                "name": "htim3.hdma[2]",
                "type": 5
            },
            {
                "address": "0x200000e8",
                "name": "htim3.hdma[3]",
                "type": 5
            },
            {
                "address": "0x200000ec",
                "name": "htim3.hdma[4]",
                "type": 5
            },
            {
                "address": "0x200000f0",
                "name": "htim3.hdma[5]",
                "type": 5
            },
            {
                "address": "0x200000f4",
                "name": "htim3.hdma[6]",
                "type": 5
            },
            {
                "address": "0x200000d4",
                "name": "htim3.Init.AutoReloadPreload",
                "type": 5
            },
            {
                "address": "0x200000cc",
                "name": "htim3.Init.ClockDivision",
                "type": 5
            },
            {
                "address": "0x200000c4",
                "name": "htim3.Init.CounterMode",
                "type": 5
            },
            {
                "address": "0x200000c8",
                "name": "htim3.Init.Period",
                "type": 5
            },
            {
                "address": "0x200000c0",
                "name": "htim3.Init.Prescaler",
                "type": 5
            },
            {
                "address": "0x200000d0",
                "name": "htim3.Init.RepetitionCounter",
                "type": 5
            },
            {
                "address": "0x200000bc",
                "name": "htim3.Instance",
                "type": 5
            },
            {
                "address": "0x200000f8",
                "name": "htim3.Lock",
                "type": 2
            },
            {
                "address": "0x200000f9",
                "name": "htim3.State",
                "type": 2
            },
            {
                "address": "0x2000014c",
                "name": "internalAdcRawData[0]",
                "type": 3
            },
            {
                "address": "0x2000014e",
                "name": "internalAdcRawData[1]",
                "type": 3
            },
            {
                "address": "0x20000150",
                "name": "internalAdcRawData[2]",
                "type": 3
            },
            {
                "address": "0x20000152",
                "name": "internalAdcRawData[3]",
                "type": 3
            },
            {
                "address": "0x2000013c",
                "name": "pid.command_prev",
                "type": 9
            },
            {
                "address": "0x20000138",
                "name": "pid.command_sat_prev",
                "type": 9
            },
            {
                "address": "0x20000134",
                "name": "pid.deriv_prev",
                "type": 9
            },
            {
                "address": "0x20000130",
                "name": "pid.err_prev",
                "type": 9
            },
            {
                "address": "0x2000012c",
                "name": "pid.integral",
                "type": 9
            },
            {
                "address": "0x20000114",
                "name": "pid.Kaw",
                "type": 9
            },
            {
                "address": "0x20000110",
                "name": "pid.Kd",
                "type": 9
            },
            {
                "address": "0x2000010c",
                "name": "pid.Ki",
                "type": 9
            },
            {
                "address": "0x20000108",
                "name": "pid.Kp",
                "type": 9
            },
            {
                "address": "0x20000120",
                "name": "pid.max",
                "type": 9
            },
            {
                "address": "0x20000128",
                "name": "pid.max_rate",
                "type": 9
            },
            {
                "address": "0x20000124",
                "name": "pid.min",
                "type": 9
            },
            {
                "address": "0x2000011c",
                "name": "pid.T",
                "type": 9
            },
            {
                "address": "0x20000118",
                "name": "pid.T_C",
                "type": 9
            },
            {
                "address": "0x20000000",
                "name": "SystemCoreClock",
                "type": 5
            },
            {
                "address": "0x20000158",
                "name": "uwTick",
                "type": 5
            },
            {
                "address": "0x20000008",
                "name": "uwTickFreq",
                "type": 2
            },
            {
                "address": "0x20000004",
                "name": "uwTickPrio",
                "type": 5
            }
        ],
        "expand": true,
        "filename": "Buck_control.elf",
        "exeModifiedTime": 1758673114166,
        "configLastUpdate": 1758674180018
    },
    {
        "id": "2e356a733a6d26e8",
        "type": "ui_group",
        "name": "Buttons",
        "tab": "17d09b07.741a55",
        "order": 1,
        "disp": true,
        "width": 10,
        "collapse": false,
        "className": ""
    },
    {
        "id": "aeecb6196bac04a9",
        "type": "exe-config",
        "name": "Buck_values",
        "exefile": "C:\\Users\\caiom\\STM32CubeIDE\\workspace_2\\Buck_control\\Debug\\Buck_control.elf",
        "exefolder": "C:\\Users\\caiom\\STM32CubeIDE\\workspace_2\\Buck_control\\Debug",
        "exevariablelist": [
            {
                "address": "0x08004fbc",
                "name": "AHBPrescTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fcc",
                "name": "aPLLMULFactorTable[0]",
                "type": 1
            },
            {
                "address": "0x08004fdc",
                "name": "aPredivFactorTable[0]",
                "type": 1
            },
            {
                "address": "0x20000148",
                "name": "Buck.setPoint",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000140",
                "name": "Buck.Vin",
                "type": 9
            },
            {
                "address": "0x20000144",
                "name": "Buck.Vout",
                "type": 9
            },
            {
                "address": "0x20000154",
                "name": "dutyCycle",
                "type": 9
            },
            {
                "address": "0x20000060",
                "name": "hadc1.DMA_Handle",
                "type": 5
            },
            {
                "address": "0x2000006c",
                "name": "hadc1.ErrorCode",
                "type": 5
            },
            {
                "address": "0x2000002c",
                "name": "hadc1.Init.ClockPrescaler",
                "type": 5
            },
            {
                "address": "0x20000041",
                "name": "hadc1.Init.ContinuousConvMode",
                "type": 2
            },
            {
                "address": "0x20000034",
                "name": "hadc1.Init.DataAlign",
                "type": 5
            },
            {
                "address": "0x20000048",
                "name": "hadc1.Init.DiscontinuousConvMode",
                "type": 2
            },
            {
                "address": "0x20000058",
                "name": "hadc1.Init.DMAContinuousRequests",
                "type": 2
            },
            {
                "address": "0x2000003c",
                "name": "hadc1.Init.EOCSelection",
                "type": 5
            },
            {
                "address": "0x20000050",
                "name": "hadc1.Init.ExternalTrigConv",
                "type": 5
            },
            {
                "address": "0x20000054",
                "name": "hadc1.Init.ExternalTrigConvEdge",
                "type": 5
            },
            {
                "address": "0x20000040",
                "name": "hadc1.Init.LowPowerAutoWait",
                "type": 2
            },
            {
                "address": "0x20000044",
                "name": "hadc1.Init.NbrOfConversion",
                "type": 5
            },
            {
                "address": "0x2000004c",
                "name": "hadc1.Init.NbrOfDiscConversion",
                "type": 5
            },
            {
                "address": "0x2000005c",
                "name": "hadc1.Init.Overrun",
                "type": 5
            },
            {
                "address": "0x20000030",
                "name": "hadc1.Init.Resolution",
                "type": 5
            },
            {
                "address": "0x20000038",
                "name": "hadc1.Init.ScanConvMode",
                "type": 5
            },
            {
                "address": "0x20000074",
                "name": "hadc1.InjectionConfig.ChannelCount",
                "type": 5
            },
            {
                "address": "0x20000070",
                "name": "hadc1.InjectionConfig.ContextQueue",
                "type": 5
            },
            {
                "address": "0x20000028",
                "name": "hadc1.Instance",
                "type": 5
            },
            {
                "address": "0x20000064",
                "name": "hadc1.Lock",
                "type": 2
            },
            {
                "address": "0x20000068",
                "name": "hadc1.State",
                "type": 5
            },
            {
                "address": "0x200000b8",
                "name": "hdma_adc1.ChannelIndex",
                "type": 5
            },
            {
                "address": "0x200000b4",
                "name": "hdma_adc1.DmaBaseAddress",
                "type": 5
            },
            {
                "address": "0x200000b0",
                "name": "hdma_adc1.ErrorCode",
                "type": 5
            },
            {
                "address": "0x2000007c",
                "name": "hdma_adc1.Init.Direction",
                "type": 5
            },
            {
                "address": "0x2000008c",
                "name": "hdma_adc1.Init.MemDataAlignment",
                "type": 5
            },
            {
                "address": "0x20000084",
                "name": "hdma_adc1.Init.MemInc",
                "type": 5
            },
            {
                "address": "0x20000090",
                "name": "hdma_adc1.Init.Mode",
                "type": 5
            },
            {
                "address": "0x20000088",
                "name": "hdma_adc1.Init.PeriphDataAlignment",
                "type": 5
            },
            {
                "address": "0x20000080",
                "name": "hdma_adc1.Init.PeriphInc",
                "type": 5
            },
            {
                "address": "0x20000094",
                "name": "hdma_adc1.Init.Priority",
                "type": 5
            },
            {
                "address": "0x20000078",
                "name": "hdma_adc1.Instance",
                "type": 5
            },
            {
                "address": "0x20000098",
                "name": "hdma_adc1.Lock",
                "type": 2
            },
            {
                "address": "0x2000009c",
                "name": "hdma_adc1.Parent",
                "type": 5
            },
            {
                "address": "0x20000099",
                "name": "hdma_adc1.State",
                "type": 2
            },
            {
                "address": "0x200000ac",
                "name": "hdma_adc1.XferAbortCallback",
                "type": 5
            },
            {
                "address": "0x200000a0",
                "name": "hdma_adc1.XferCpltCallback",
                "type": 5
            },
            {
                "address": "0x200000a8",
                "name": "hdma_adc1.XferErrorCallback",
                "type": 5
            },
            {
                "address": "0x200000a4",
                "name": "hdma_adc1.XferHalfCpltCallback",
                "type": 5
            },
            {
                "address": "0x200000d8",
                "name": "htim3.Channel",
                "type": 2
            },
            {
                "address": "0x20000100",
                "name": "htim3.ChannelNState[0]",
                "type": 2
            },
            {
                "address": "0x200000fa",
                "name": "htim3.ChannelState[0]",
                "type": 2
            },
            {
                "address": "0x20000104",
                "name": "htim3.DMABurstState",
                "type": 2
            },
            {
                "address": "0x200000dc",
                "name": "htim3.hdma[0]",
                "type": 5
            },
            {
                "address": "0x200000d4",
                "name": "htim3.Init.AutoReloadPreload",
                "type": 5
            },
            {
                "address": "0x200000cc",
                "name": "htim3.Init.ClockDivision",
                "type": 5
            },
            {
                "address": "0x200000c4",
                "name": "htim3.Init.CounterMode",
                "type": 5
            },
            {
                "address": "0x200000c8",
                "name": "htim3.Init.Period",
                "type": 5
            },
            {
                "address": "0x200000c0",
                "name": "htim3.Init.Prescaler",
                "type": 5
            },
            {
                "address": "0x200000d0",
                "name": "htim3.Init.RepetitionCounter",
                "type": 5
            },
            {
                "address": "0x200000bc",
                "name": "htim3.Instance",
                "type": 5
            },
            {
                "address": "0x200000f8",
                "name": "htim3.Lock",
                "type": 2
            },
            {
                "address": "0x200000f9",
                "name": "htim3.State",
                "type": 2
            },
            {
                "address": "0x2000014c",
                "name": "internalAdcRawData[0]",
                "type": 3
            },
            {
                "address": "0x2000013c",
                "name": "pid.command_prev",
                "type": 9
            },
            {
                "address": "0x20000138",
                "name": "pid.command_sat_prev",
                "type": 9
            },
            {
                "address": "0x20000134",
                "name": "pid.deriv_prev",
                "type": 9
            },
            {
                "address": "0x20000130",
                "name": "pid.err_prev",
                "type": 9
            },
            {
                "address": "0x2000012c",
                "name": "pid.integral",
                "type": 9
            },
            {
                "address": "0x20000114",
                "name": "pid.Kaw",
                "type": 9
            },
            {
                "address": "0x20000110",
                "name": "pid.Kd",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x2000010c",
                "name": "pid.Ki",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000108",
                "name": "pid.Kp",
                "type": 9,
                "checked": true
            },
            {
                "address": "0x20000120",
                "name": "pid.max",
                "type": 9
            },
            {
                "address": "0x20000128",
                "name": "pid.max_rate",
                "type": 9
            },
            {
                "address": "0x20000124",
                "name": "pid.min",
                "type": 9
            },
            {
                "address": "0x2000011c",
                "name": "pid.T",
                "type": 9
            },
            {
                "address": "0x20000118",
                "name": "pid.T_C",
                "type": 9
            },
            {
                "address": "0x20000000",
                "name": "SystemCoreClock",
                "type": 5
            },
            {
                "address": "0x20000158",
                "name": "uwTick",
                "type": 5
            },
            {
                "address": "0x20000008",
                "name": "uwTickFreq",
                "type": 2
            },
            {
                "address": "0x20000004",
                "name": "uwTickPrio",
                "type": 5
            }
        ],
        "expand": false,
        "filename": "Buck_control.elf",
        "exeModifiedTime": 1758673114166,
        "configLastUpdate": 1758674240534
    },
    {
        "id": "17d09b07.741a55",
        "type": "ui_tab",
        "name": "Charts",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]