API ENDPOINTS:

- POST getLogs {...filterParams}
- POST postLog {...IPomodoroLog}

example: api-methods.ts

export function getLogs(filterParams) {
...logic for accessing data from ls asn filtering them
}

const LS_LOGS = 'logsLsKey'

function postLogs(log){
const jsonResult = localStorage.getItem(LS_LOGS)
const log = jsonResult ? JSON.parse(jsonResult) : []
const newLog = {
...log,
id: Date now()
}
localStorage.setItem(LS_LOGS, JSON.stringify([...oldLogs, newLog]))
}

API FLOW LAYERS:

- api layer
  - LS_MODELS:
    - logs
- redux controller layer
  - actions
- model
- view

POMODORO CYCLE FLOW:

- user starts pomodoro
- pomodor is running according to ISettingsModel(inputs)
- after every timer mode change, log is created and sent to api
  - timer can end by user action
  - timer can end automatically

{...old,...new}

Partial<ISettingsModel>
