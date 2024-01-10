export class Tutorial {
  id: number
  texto: string
  fecha: string
  hora: string
  recordatorio: boolean

  constructor(id: number, texto: string, fecha: string, hora: string, recordatorio: boolean) {
    this.id = id
    this.texto = texto
    this.fecha = fecha
    this.hora = hora
    this.recordatorio = recordatorio
  }
}
