/*
model StudentInfo {
  id Int @id @default(autoincrement())
  phone String
  address String
  studentId Int @unique
  student Student @relation(fields: [studentId], references: [id])
}
*/

export interface IStudent{
    id: number
    phone: number
    address: string
}

export type TCreateStudentBody = Omit<IStudent, 'id'>